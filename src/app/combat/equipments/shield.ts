import { Dice, DiceType, DiceResult } from '../combat-mechanism/dice';

export interface ShieldDefinition {
  dice: DiceType;
  hitPoint: number;
  agilityPenalty: number;
}

export class Shield {
  get currentHitpoint() { return this.currentHp; }
  readonly hitPoint: number;
  private currentHp: number;

  readonly dice: DiceType;
  readonly agilityPenalty: number;


  constructor(definition: ShieldDefinition) {
    this.dice = definition.dice;
    this.hitPoint = definition.hitPoint;
    this.currentHp = definition.hitPoint;
    this.agilityPenalty = definition.agilityPenalty;
  }

  block(): number {
    if (this.currentHp > 0 && Dice.roll(this.dice) !== DiceResult.fail) {
      return 1;
    } else {
      return 0;
    }
  }

  getDamage() {
    this.currentHp--;
  }
}
