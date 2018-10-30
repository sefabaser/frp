import { Dice, DiceType, DiceResult } from '../utils/dice';

export interface ArmorDefinition {
  armorClass: number;
  agilityPenalty: number;
}

export class Armor {
  readonly armorClass: number;
  readonly agilityPenalty: number;

  constructor(definition: ArmorDefinition) {
    if (!definition) {
      definition = {
        armorClass: 0,
        agilityPenalty: 0
      };
    }

    this.armorClass = definition.armorClass;
    this.agilityPenalty = definition.agilityPenalty;
  }

  getProtection(): number {
    let d8Count = Math.floor(this.armorClass / 3);
    let d6 = this.armorClass % 3 === 2;
    let d4 = this.armorClass % 3 === 1;

    let successCount = 0;
    for (let i = 1; i <= d8Count; i++) {
      if (Dice.roll(DiceType.d8) !== DiceResult.fail) {
        successCount++;
      }
    }

    if (d6 && Dice.roll(DiceType.d6) !== DiceResult.fail) {
      successCount++;
    }

    if (d4 && Dice.roll(DiceType.d4) !== DiceResult.fail) {
      successCount++;
    }

    return successCount;
  }
}
