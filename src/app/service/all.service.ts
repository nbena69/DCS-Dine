import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {TopApp} from "../metier/topApp";
import {MontantParMois} from "../metier/MontantParMois";
import {Produit1} from "../metier/Produit1";
import {Produit2} from "../metier/Produit2";

@Injectable({
  providedIn: 'root'
})

export class AllService {
  private apiUrl = 'http://localhost/benaissa/ProjetDcsApi/public/api';

  public LigneFacturation: TopApp[] = [];
  private _reponses = new BehaviorSubject<TopApp[]>([]);
  readonly appels_termines = this._reponses.asObservable();

  public MontantParMois: MontantParMois[] = [];
  private _reponsesMontantParMois = new BehaviorSubject<MontantParMois[]>([]);
  readonly appels_terminesMontantParMois = this._reponsesMontantParMois.asObservable();

  public Produit1: Produit1[] = [];
  private _reponsesProduit1 = new BehaviorSubject<Produit1[]>([]);
  readonly appels_terminesProduit1 = this._reponsesProduit1.asObservable();

  public Produit2: Produit2[] = [];
  private _reponsesProduit2 = new BehaviorSubject<Produit2[]>([]);
  readonly appels_terminesProduit2 = this._reponsesProduit2.asObservable();

  constructor(private http: HttpClient) {
  }


  topApp() {
    this.http.get<TopApp[]>(`${this.apiUrl}/one`,)
      .subscribe(
        data => {
          this.LigneFacturation = data;
          this._reponses.next(this.LigneFacturation);
          console.log("Api Top App reussi");
        },
        error => {
          console.log("Erreur Appel API Top App", error);
        }
      );
  }

  evolMontant() {
    this.http.get<MontantParMois[]>(`${this.apiUrl}/two`,)
      .subscribe(
        data => {
          this.MontantParMois = data;
          this._reponsesMontantParMois.next(this.MontantParMois);
          console.log(data);
        },
        error => {
          console.log("Erreur Appel API Montant par mois", error);
        }
      );
  }

  evolProduit1() {
    this.http.get<Produit1[]>(`${this.apiUrl}/three`,)
      .subscribe(
        data => {
          this.Produit1 = data;
          this._reponsesProduit1.next(this.Produit1);
          console.log(data);
        },
        error => {
          console.log("Erreur Appel API Produit1", error);
        }
      );
  }

  evolProduit2() {
    this.http.get<Produit2[]>(`${this.apiUrl}/four`,)
      .subscribe(
        data => {
          this.Produit2 = data;
          this._reponsesProduit2.next(this.Produit2);
          console.log(data);
        },
        error => {
          console.log("Erreur Appel Produit2", error);
        }
      );
  }
}
