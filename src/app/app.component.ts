import { Component } from '@angular/core';

import { CombatReport } from './combat/combat-report/report';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    let combatReport = new CombatReport();
  }
}
