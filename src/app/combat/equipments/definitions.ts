import { ArmorDefinition } from './armor';
import { ShieldDefinition } from './shield';
import { WeaponDefinition, WeaponReaching } from './weapon';
import { DiceType } from '../utils/dice';

const WoodenHitPoint = 1;
const SteelHitPoint = 4;
const LargeShieldHitPointDifference = 1;

export const Shields: { [key: string]: ShieldDefinition } = {
  woodenSmallShield: { dice: DiceType.d6, hitPoint: WoodenHitPoint, agilityPenalty: 0 },
  steelSmallShield: { dice: DiceType.d6, hitPoint: SteelHitPoint, agilityPenalty: 1 },
  woodenLargeShield: {
    dice: DiceType.d8,
    hitPoint: WoodenHitPoint + LargeShieldHitPointDifference,
    agilityPenalty: 1
  },
  steelLargeShield: {
    dice: DiceType.d8,
    hitPoint: SteelHitPoint + LargeShieldHitPointDifference,
    agilityPenalty: 2
  }
};

export const HeadArmors: { [key: string]: ArmorDefinition } = {
  none: { armorClass: 0, agilityPenalty: 0 },
  cap: { armorClass: 1, agilityPenalty: 0 },
  helm: { armorClass: 2, agilityPenalty: 1 }
};

export const BodyArmors: { [key: string]: ArmorDefinition } = {
  none: { armorClass: 0, agilityPenalty: 0 },
  leather: { armorClass: 2, agilityPenalty: 0 },
  chain: { armorClass: 3, agilityPenalty: 1 },
  plate: { armorClass: 4, agilityPenalty: 2 }
};

export const Weapons: { [key: string]: WeaponDefinition } = {
  unarmed: {
    attackDices: [ DiceType.d6 ],
    parryDice: null,
    reaching: WeaponReaching.none,
    throwable: false,
    unparryable: true,
    hitPoint: 0,
    twoHanded: false,
    offhand: null
  },
  club: {
    attackDices: [ DiceType.d6, DiceType.d6 ],
    parryDice: DiceType.d6,
    reaching: WeaponReaching.short,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: false,
    offhand: null
  },
  spear: {
    attackDices: [ DiceType.d6, DiceType.d6 ],
    parryDice: null,
    reaching: WeaponReaching.long,
    throwable: true,
    unparryable: true,
    hitPoint: WoodenHitPoint,
    twoHanded: false,
    offhand: null
  },
  dagger: {
    attackDices: [ DiceType.d6, DiceType.d6, DiceType.d6 ],
    parryDice: null,
    reaching: WeaponReaching.none,
    throwable: true,
    unparryable: true,
    hitPoint: SteelHitPoint,
    twoHanded: false,
    offhand: {
      attackDices: [ DiceType.d6, DiceType.d6 ],
      parryDice: null,
      reaching: WeaponReaching.none,
      throwable: true,
      unparryable: true,
      hitPoint: SteelHitPoint,
      twoHanded: false,
      offhand: null
    }
  },
  shortSword: {
    attackDices: [ DiceType.d6, DiceType.d6, DiceType.d4 ],
    parryDice: DiceType.d6,
    reaching: WeaponReaching.short,
    throwable: false,
    unparryable: false,
    hitPoint: SteelHitPoint,
    twoHanded: false,
    offhand: {
      attackDices: [ DiceType.d6, DiceType.d4 ],
      parryDice: DiceType.d4,
      reaching: WeaponReaching.short,
      throwable: false,
      unparryable: false,
      hitPoint: SteelHitPoint,
      twoHanded: false,
      offhand: null
    }
  },
  longSword: {
    attackDices: [ DiceType.d8, DiceType.d8 ],
    parryDice: DiceType.d8,
    reaching: WeaponReaching.long,
    throwable: false,
    unparryable: false,
    hitPoint: SteelHitPoint,
    twoHanded: false,
    offhand: null
  },
  handAxe: {
    attackDices: [ DiceType.d6, DiceType.d6, DiceType.d6 ],
    parryDice: DiceType.d4,
    reaching: WeaponReaching.short,
    throwable: true,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: false,
    offhand: {
      attackDices: [ DiceType.d6, DiceType.d4 ],
      parryDice: DiceType.d4,
      reaching: WeaponReaching.short,
      throwable: true,
      unparryable: false,
      hitPoint: WoodenHitPoint,
      twoHanded: false,
      offhand: null
    }
  },
  battleAxe: {
    attackDices: [ DiceType.d10, DiceType.d6 ],
    parryDice: DiceType.d4,
    reaching: WeaponReaching.short,
    throwable: false,
    unparryable: false,
    hitPoint: SteelHitPoint,
    twoHanded: false,
    offhand: null
  },
  mace: {
    attackDices: [ DiceType.d12 ],
    parryDice: DiceType.d4,
    reaching: WeaponReaching.short,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: false,
    offhand: null
  },
  flail: {
    attackDices: [ DiceType.d8, DiceType.d8 ],
    parryDice: null,
    reaching: WeaponReaching.long,
    throwable: false,
    unparryable: true,
    hitPoint: SteelHitPoint,
    twoHanded: false,
    offhand: null
  },
  staff: {
    attackDices: [ DiceType.d6, DiceType.d6 ],
    parryDice: DiceType.d8,
    reaching: WeaponReaching.long,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: true,
    offhand: null
  },
  greatSword: {
    attackDices: [ DiceType.d12, DiceType.d8 ],
    parryDice: DiceType.d8,
    reaching: WeaponReaching.long,
    throwable: false,
    unparryable: false,
    hitPoint: SteelHitPoint,
    twoHanded: true,
    offhand: null
  },
  greatAxe: {
    attackDices: [ DiceType.d12, DiceType.d10 ],
    parryDice: DiceType.d4,
    reaching: WeaponReaching.long,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: true,
    offhand: null
  },
  pike: {
    attackDices: [ DiceType.d8, DiceType.d6 ],
    parryDice: DiceType.d6,
    reaching: WeaponReaching.reaching,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: true,
    offhand: null
  },
  polearm: {
    attackDices: [ DiceType.d10, DiceType.d4 ],
    parryDice: DiceType.d6,
    reaching: WeaponReaching.reaching,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: true,
    offhand: null
  }
};
