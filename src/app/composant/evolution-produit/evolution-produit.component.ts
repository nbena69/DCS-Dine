import { Component } from '@angular/core';
import {Chart, ChartModule} from "angular-highcharts";
import {AsyncPipe, CommonModule} from "@angular/common";
import {MenuComponent} from "../all/menu/menu.component";

@Component({
  selector: 'app-evolution-produit',
  standalone: true,
  imports: [    AsyncPipe, CommonModule, ChartModule, MenuComponent
  ],
  template: "<div class=\"charts\">\n" +
    "  <div class=\"pie\" [chart]=\"pieChart\">\n" +
    "  </div>\n" +
    "</div>",
  styleUrl: './evolution-produit.component.css'
})
export class EvolutionProduitComponent {

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 1, color: '#eeeeee' },

          { name: 'HIV/AIDS', y: 2, color: '#393e46' },

          { name: 'EBOLA', y: 3, color: '#00adb5' },
          { name: 'DISPORA', y: 4, color: '#eeeeee' },
          { name: 'DIABETES', y: 5, color: '#506ef9' },
        ],
      },
    ],
  })
}
