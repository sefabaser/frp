import { Units } from '../unit/definitions';
import { UnitDefinition } from '../unit/unit';
import { CombatScene } from './scene';

export class CombatReport {
  constructor() {
    this.createCombatScene(Units.spearman, Units.spearman);
  }

  private createCombatScene(unit1: UnitDefinition, unit2: UnitDefinition) {
    unit1 = JSON.parse(JSON.stringify(unit1));
    unit2 = JSON.parse(JSON.stringify(unit2));

    if (unit1.name === unit2.name) {
      unit1.name += ' 1';
      unit2.name += ' 2';
    }

    let combatScene = new CombatScene(unit1, unit2);
    combatScene.start();
    console.warn(combatScene.winner);

    for (let log of combatScene.log) {
      if (log[0] === 'E') {
        console.error(log.substr(1));
      } else if (log[0] === 'W') {
        console.warn(log.substr(1));
      } else {
        console.log(log);
      }
    }
  }
}
