import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { EvolutionMontantComponent } from './components/evolution-montant/evolution-montant.component'; // Remplacez le chemin par le bon chemin
import { AutreComposant } from './components/autre-composant/autre-composant.component';
import {ChartModule} from "angular-highcharts"; // Remplacez le chemin par le bon chemin

@NgModule({
  declarations: [
    EvolutionMontantComponent,
    AutreComposant
  ],
  imports: [
    BrowserModule,
    HighchartsChartModule,
    CommonModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
