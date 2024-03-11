import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {LigneFacturation} from "../metier/ligne-facturation"; // Assurez-vous d'avoir le bon chemin vers votre service GsbApi

@Injectable({
  providedIn: 'root'
})
export class AllService {
  private apiUrl = 'http://localhost/benaissa/ProjetDcsApi/public/api'; // Remplacez cela par l'URL réelle de votre API Laravel
  private ligneFacturation: LigneFacturation = new LigneFacturation;
  private _reponses = new BehaviorSubject<LigneFacturation[]>([]);
  readonly appels_termines = this._reponses.asObservable();
  public LigneFacturation: LigneFacturation[] = [];


  constructor(private http: HttpClient) { }

  get listeFraisObs(): Observable<LigneFacturation[]> {
    return this._reponses.asObservable();
  }

  chargerListeFrais() {
    this.http.get<LigneFacturation[]>(`${this.apiUrl}/one`, )
      .subscribe(
        data => {
          this.LigneFacturation = data;
          this._reponses.next(this.LigneFacturation);
          console.log(data);
        },
        error => {
          console.log("Erreur Appel API liste frais", error);
        }
      );
  }
}
