import {Component} from '@angular/core';
import {AllService} from "../../service/all.service";
import {AsyncPipe, CommonModule} from "@angular/common";
import {Chart, ChartModule} from 'angular-highcharts';
import {MenuComponent} from "../all/menu/menu.component";

@Component({
  selector: 'app-evolution-montant',
  standalone: true,
  imports: [
    AsyncPipe, CommonModule, ChartModule, MenuComponent
  ],
  template:
    "<div class=\"charts\">\n" +
    "\n" +
    "  <div class=\"line\" [chart]=\"lineChart\">\n" +
    "\n" +
    "  </div>\n" +
    "</div>",
  styleUrls: ['./evolution-montant.component.css']
})

export class EvolutionMontantComponent {
  constructor(private all: AllService) {
    this.all.evolMontant();
  }

  getEvol() {
    return this.all.appels_terminesMontantParMois;
  }

  lineChart=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Evolution des montants'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Euros €',
        data: [10, 2, 3,6,9,17,20,10,5,2,16]
      } as any
    ]
  })
}
