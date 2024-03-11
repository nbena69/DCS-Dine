import { Component } from '@angular/core';
import {Chart, ChartModule} from "angular-highcharts";
import {AsyncPipe, CommonModule} from "@angular/common";
import {MenuComponent} from "../all/menu/menu.component";
import {AllService} from "../../service/all.service";

@Component({
  selector: 'app-evolution-produit',
  standalone: true,
  imports: [    AsyncPipe, CommonModule, ChartModule, MenuComponent
  ],
  template:
    "<app-menu></app-menu>\n" +
    "<div class=\"charts\">\n" +
    "\n" +
    "  <div class=\"line\" [chart]=\"lineChart\">\n" +
    "\n" +
    "  </div>\n" +
    "</div>",
  styleUrl: './evolution-produit.component.css'
})
export class EvolutionProduitComponent {
  value1: number[] = [];
  value2: number[] = [];

  constructor(private all: AllService) {
    this.all.evolProduit1();
    this.all.evolProduit2();
    this.updateChart();
  }

  updateChart(): void {
    this.getProduit1().subscribe((dataProduit1) => {
      for (const entry of dataProduit1) {
        const produit1Value = parseFloat(entry.VolumeTotal);
        this.value1.push(produit1Value);
      }

      this.lineChart.ref$.subscribe((chart) => {
        if (chart) {
          chart.series[0].setData(this.value1, true);
        }
      });
    });

    this.getProduit2().subscribe((dataProduit2) => {
      for (const entry of dataProduit2) {
        const produit2Value = parseFloat(entry.VolumeTotal);
        this.value2.push(produit2Value);
      }

      this.lineChart.ref$.subscribe((chart) => {
        if (chart) {
          chart.series[1].setData(this.value2, true);
        }
      });
    });
  }

  getProduit1() {
    return this.all.appels_terminesProduit1;
  }

  getProduit2() {
    return this.all.appels_terminesProduit2;
  }

  lineChart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Evolution des Produits',
    },
    credits: {
      enabled: false,
    },
    series: [
      { name: 'Client1', data: this.value1 } as any,
      { name: 'Client2', data: this.value2 } as any,
    ],
  });
}
