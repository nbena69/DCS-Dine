import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {TopApp} from "../metier/topApp";
import {MontantParMois} from "../metier/MontantParMois"; // Assurez-vous d'avoir le bon chemin vers votre service GsbApi

@Injectable({
  providedIn: 'root'
})

export class AllService {
  private apiUrl = 'http://localhost/benaissa/ProjetDcsApi/public/api'; // Remplacez cela par l'URL réelle de votre API Laravel

  public LigneFacturation: TopApp[] = [];
  private _reponses = new BehaviorSubject<TopApp[]>([]);
  readonly appels_termines = this._reponses.asObservable();

  public MontantParMois: MontantParMois[] = [];
  private _reponsesMontantParMois = new BehaviorSubject<MontantParMois[]>([]);
  readonly appels_terminesMontantParMois = this._reponsesMontantParMois.asObservable();

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
}
