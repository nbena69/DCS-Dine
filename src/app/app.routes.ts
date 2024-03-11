import { Routes } from '@angular/router';
import {HomeComponent} from "./composant/home/home.component";
import {TopApplicationComponent} from "./composant/top-application/top-application.component";
import {EvolutionMontantComponent} from "./composant/evolution-montant/evolution-montant.component";
import {EvolutionProduitComponent} from "./composant/evolution-produit/evolution-produit.component";

export const routes: Routes = [
  {path: 'topApplication', component: TopApplicationComponent},
  {path: 'evoMontant', component: EvolutionMontantComponent},
  {path: 'evoProduit', component: EvolutionProduitComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];
