import { CombatScene } from './combat-scene';
import { Units } from '../unit/definitions';
import { UnitDefinition } from '../unit/unit';

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
  }
}
