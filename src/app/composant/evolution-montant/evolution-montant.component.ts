import {Component} from '@angular/core';
import {AllService} from "../../service/all.service";
import {AsyncPipe, CommonModule} from "@angular/common";

@Component({
  selector: 'app-evolution-montant',
  standalone: true,
  imports: [
    AsyncPipe, CommonModule
  ],
  templateUrl: './evolution-montant.component.html',
  styleUrls: ['./evolution-montant.component.css']
})
export class EvolutionMontantComponent {
  constructor(private all: AllService) {
    this.all.evolMontant();
  }
  getEvol() {
    return this.all.appels_terminesMontantParMois;
  }
}
