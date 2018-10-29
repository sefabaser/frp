import { Units } from '../unit/definitions';
import { UnitDefinition } from '../unit/unit';
import { CombatScene } from './scene';

const BulkLimit = 10000;

export class CombatReport {
  constructor() {
    this.processDuel(Units.twoHandedSwordsman, Units.spearman, 'bulk');
  }

  private processDuel(unit1: UnitDefinition, unit2: UnitDefinition, bulkDuel: 'bulk' | 'single') {
    this.checkUnitNames(unit1, unit2);
    if (bulkDuel === 'bulk') {
      let statistic = {};
      statistic[unit1.name] = 0;
      statistic[unit2.name] = 0;

      for (let i = 0; i <= BulkLimit; i++) {
        let winner = this.duel(unit1, unit2, 'not print');
        statistic[winner]++;
      }

      statistic[unit1.name] = statistic[unit1.name] * 100 / BulkLimit;
      statistic[unit2.name] = statistic[unit2.name] * 100 / BulkLimit;
      console.warn(JSON.stringify(statistic));
    } else {
      let winner = this.duel(unit1, unit2, 'print');
      console.warn(winner);
    }
  }

  private checkUnitNames(unit1: UnitDefinition, unit2: UnitDefinition) {
    unit1 = JSON.parse(JSON.stringify(unit1));
    unit2 = JSON.parse(JSON.stringify(unit2));

    if (unit1.name === unit2.name) {
      unit1.name += ' 1';
      unit2.name += ' 2';
    }
  }

  private duel(unit1: UnitDefinition, unit2: UnitDefinition, print: 'print' | 'not print'): string {
    let combatScene = new CombatScene(unit1, unit2);
    combatScene.handleTheBattle();
    if (print === 'print') {
      combatScene.printLog();
    }
    return combatScene.winner.name;
  }
}
