import { DiceType } from '../combat-mechanism/dice';

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
