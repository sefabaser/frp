import { DiceType, Dice, DiceResult } from '../combat-mechanism/dice';

export enum WeaponReaching {
  none = 'none',
  short = 'short',
  long = 'long',
  reaching = 'reaching'
}

export interface WeaponDefinition {
  attackDices: DiceType[];
  parryDice: DiceType | null;
  reaching: WeaponReaching;
  throwable: boolean;
  unparryable: boolean;
  hitPoint: number;
  twoHanded: boolean;
  offhand: WeaponDefinition | null;
}

export class Weapon {
  readonly reaching: WeaponReaching;
  readonly throwable: boolean;
  readonly unparryable: boolean;
  readonly hitPoint: number;
  readonly twoHanded: boolean;

  private attackDices: DiceType[];
  private parryDice: DiceType | null;
  private currentHitPoint: number;

  constructor(definition: WeaponDefinition) {
    this.attackDices = definition.attackDices;
    this.parryDice = definition.parryDice;
    this.reaching = definition.reaching;
    this.throwable = definition.throwable;
    this.unparryable = definition.unparryable;
    this.hitPoint = definition.hitPoint;
    this.currentHitPoint = definition.hitPoint;
    this.twoHanded = definition.twoHanded;
  }

  attack(): { success: number, crictical: number} {
    let result = {
      success: 0,
      crictical: 0
    };

    for (let dice of this.attackDices) {
      let roll = Dice.roll(dice);
      if (roll === DiceResult.success) {
        result.success++;
      } else if (roll === DiceResult.crictical) {
        result.crictical++;
      }
    }

    return result;
  }

  parry(): number {
    if (this.currentHitPoint > 0 && this.parryDice && Dice.roll(this.parryDice) !== DiceResult.fail) {
      return 1;
    } else {
      return 0;
    }
  }

  getDamage() {
    this.currentHitPoint--;
  }
}
