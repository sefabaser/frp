import { Component } from '@angular/core';

import { CombatReport } from './combat/combat-report/report';
import { Units } from './combat/unit/definitions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    let combatReport = new CombatReport();
    combatReport.processDuel(Units.twoHandedSwordsman, Units.swordsman, 'bulk');
  }
}
