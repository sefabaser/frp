import { Component } from '@angular/core';
import { UnitCreatorComponent } from '../unit-creator/unit-creator.component';
import { CombatReport, CombatStatistics } from 'src/app/combat/combat-report/report';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.scss']
})
export class DuelComponent {
  statistics: CombatStatistics;

  singleCombat(unitCreator1: UnitCreatorComponent, unitCreator2: UnitCreatorComponent) {
    let combatReport = new CombatReport();
    this.statistics = combatReport.processDuel(unitCreator1.getUnitDefinition(), unitCreator2.getUnitDefinition(), 'single');
  }
}
