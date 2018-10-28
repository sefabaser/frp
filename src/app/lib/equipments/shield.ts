import { Dice, DiceType, DiceResult } from '../combat-mechanism/dice';

export interface ShieldDefinition {
  dice: DiceType;
  hitPoint: number;
  agilityPenalty: number;
}

export class Shield {
  readonly dice: DiceType;
  readonly hitPoint: number;
  readonly agilityPenalty: number;

  private currentHitPoint: number;

  constructor(definition: ShieldDefinition) {
    this.dice = definition.dice;
    this.hitPoint = definition.hitPoint;
    this.currentHitPoint = definition.hitPoint;
    this.agilityPenalty = definition.agilityPenalty;
  }

  roll(): number {
    if (this.currentHitPoint > 0 && Dice.roll(this.dice) !== DiceResult.fail) {
      return 1;
    } else {
      return 0;
    }
  }

  damage() {
    this.currentHitPoint--;
  }
}
