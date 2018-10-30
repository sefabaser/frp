import { Dice, DiceResult, DiceType } from '../utils/dice';
import { Attack } from '../utils/combat.model';

export enum WeaponReaching {
  none = 0,
  short = 1,
  long = 2,
  reaching = 3
}

export interface WeaponDefinition {
  name: string;
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
  get currentHitpoint() { return this.currentHp; }
  readonly hitPoint: number;
  readonly reaching: WeaponReaching;
  readonly throwable: boolean;
  readonly unparryable: boolean;
  readonly twoHanded: boolean;

  private currentHp: number;
  private attackDices: DiceType[];
  private parryDice: DiceType | null;

  constructor(definition: WeaponDefinition) {
    this.attackDices = definition.attackDices;
    this.parryDice = definition.parryDice;
    this.reaching = definition.reaching;
    this.throwable = definition.throwable;
    this.unparryable = definition.unparryable;
    this.hitPoint = definition.hitPoint;
    this.currentHp = definition.hitPoint;
    this.twoHanded = definition.twoHanded;
  }

  getAttack(): Attack {
    let result = {
      hit: 0,
      crictical: 0,
      unparryable: this.unparryable
    };

    for (let dice of this.attackDices) {
      let roll = Dice.roll(dice);
      if (roll === DiceResult.success) {
        result.hit++;
      } else if (roll === DiceResult.crictical) {
        result.crictical++;
      }
    }

    return result;
  }

  getParry(): number {
    if (this.currentHp > 0 && this.parryDice && Dice.roll(this.parryDice) !== DiceResult.fail) {
      return 1;
    } else {
      return 0;
    }
  }

  receiveDamage() {
    this.currentHp--;
  }

  isReachingMoreThan(reaching: WeaponReaching): boolean {
    return this.reaching > reaching;
  }
}
