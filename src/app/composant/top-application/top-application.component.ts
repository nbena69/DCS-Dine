import { Component } from '@angular/core';
import {AllService} from "../../service/all.service";
import {AsyncPipe, CommonModule} from "@angular/common";
import {MenuComponent} from "../all/menu/menu.component";

@Component({
  selector: 'app-top-application',
  standalone: true,
    imports: [
        AsyncPipe, CommonModule, MenuComponent
    ],
  templateUrl: './top-application.component.html',
  styleUrl: './top-application.component.css'
})
export class TopApplicationComponent {
  constructor(private all: AllService) {
    this.all.topApp();
  }

  getTop() {
    return this.all.appels_termines;
  }
}
