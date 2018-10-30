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
  showLog = false;
  showReport = false;

  combat(unitCreator1: UnitCreatorComponent, unitCreator2: UnitCreatorComponent, bulk: 'single' | 'bulk') {
    this.showLog = false;
    this.showReport = false;
    let combatReport = new CombatReport();
    let unit1 = unitCreator1.getUnitDefinition();
    let unit2 = unitCreator2.getUnitDefinition();
    unit1.name = unit1.name || 'Attacker';
    unit2.name = unit2.name || 'Defender';
    this.statistics = combatReport.processDuel(unit1, unit2, bulk);
    bulk === 'single' ? this.showLog = true : this.showReport = true;
  }
}
