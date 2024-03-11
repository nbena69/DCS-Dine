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
    "<app-menu></app-menu>\n" +
    "<div class=\"charts\">\n" +
    "\n" +
    "  <div class=\"line\" [chart]=\"lineChart\">\n" +
    "\n" +
    "  </div>\n" +
    "</div>",
  styleUrls: ['./evolution-montant.component.css']
})

export class EvolutionMontantComponent {
  value1: number[] = [];
  value2: number[] = [];
  value3: number[] = [];

  constructor(private all: AllService) {
    this.all.evolMontant();
    this.updateChart();
  }

  updateChart(): void {
    this.getEvol().subscribe((data) => {
      for (const entry of data) {
        const clientValue = parseFloat(entry.MontantTotalEuro);
        if (entry.GrandClient === 'Client1') {
          this.value1.push(clientValue);
        } else if (entry.GrandClient === 'Client2') {
          this.value2.push(clientValue);
        } else if (entry.GrandClient === 'Client3') {
          this.value3.push(clientValue);
        }
      }

      this.lineChart.ref$.subscribe((chart) => {
        if (chart) {
          chart.series[0].setData(this.value1, true);
          chart.series[1].setData(this.value2, true);
          chart.series[2].setData(this.value3, true);
        }
      });
    });
  }

  getEvol() {
    return this.all.appels_terminesMontantParMois;
  }

  lineChart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Evolution des montants',
    },
    credits: {
      enabled: false,
    },
    series: [
      { name: 'Client1', data: this.value1 } as any,
      { name: 'Client2', data: this.value2 } as any,
      { name: 'Client3', data: this.value3 } as any,
    ],
  });
}
