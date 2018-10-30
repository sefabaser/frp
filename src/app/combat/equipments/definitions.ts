import { ArmorDefinition } from './armor';
import { ShieldDefinition } from './shield';
import { WeaponDefinition, WeaponReaching } from './weapon';
import { WoodenHitPoint, SteelHitPoint, LargeShieldHitPointDifference } from './rules';
import { DiceType } from '../utils/dice';

export const Shields: { [key: string]: ShieldDefinition } = {
  woodenSmallShield: { name: 'Small wooden shield', dice: DiceType.d6, hitPoint: WoodenHitPoint, agilityPenalty: 0 },
  steelSmallShield: { name: 'Small steel shield', dice: DiceType.d6, hitPoint: SteelHitPoint, agilityPenalty: 1 },
  woodenLargeShield: {
    name: 'Large wooden shield',
    dice: DiceType.d8,
    hitPoint: WoodenHitPoint + LargeShieldHitPointDifference,
    agilityPenalty: 1
  },
  steelLargeShield: {
    name: 'Large steel shield',
    dice: DiceType.d8,
    hitPoint: SteelHitPoint + LargeShieldHitPointDifference,
    agilityPenalty: 2
  }
};

export const HeadArmors: { [key: string]: ArmorDefinition } = {
  none: { name: 'None', armorClass: 0, agilityPenalty: 0 },
  cap: { name: 'Cap', armorClass: 1, agilityPenalty: 0 },
  helm: { name: 'Helm', armorClass: 2, agilityPenalty: 1 }
};

export const BodyArmors: { [key: string]: ArmorDefinition } = {
  none: { name: 'None', armorClass: 0, agilityPenalty: 0 },
  leather: { name: 'Leather', armorClass: 2, agilityPenalty: 0 },
  chain: { name: 'Chain', armorClass: 3, agilityPenalty: 1 },
  plate: { name: 'Plate', armorClass: 4, agilityPenalty: 2 }
};

export const Weapons: { [key: string]: WeaponDefinition } = {
  unarmed: {
    name: 'Unarmed',
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
    name: 'Club',
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
    name: 'Spear',
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
    name: 'Dagger',
    attackDices: [ DiceType.d6, DiceType.d6, DiceType.d4 ],
    parryDice: null,
    reaching: WeaponReaching.none,
    throwable: true,
    unparryable: true,
    hitPoint: SteelHitPoint,
    twoHanded: false,
    offhand: {
      name: 'Dagger',
      attackDices: [ DiceType.d6, DiceType.d4 ],
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
    name: 'Short sword',
    attackDices: [ DiceType.d6, DiceType.d6, DiceType.d4 ],
    parryDice: DiceType.d6,
    reaching: WeaponReaching.short,
    throwable: false,
    unparryable: false,
    hitPoint: SteelHitPoint,
    twoHanded: false,
    offhand: {
      name: 'Short sword',
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
    name: 'Long sword',
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
    name: 'Handaxe',
    attackDices: [ DiceType.d6, DiceType.d6, DiceType.d6 ],
    parryDice: DiceType.d4,
    reaching: WeaponReaching.short,
    throwable: true,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: false,
    offhand: {
      name: 'Handaxe',
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
    name: 'Battleaxe',
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
    name: 'Mace',
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
    name: 'Flail',
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
    name: 'Staff',
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
    name: 'Greatsword',
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
    name: 'Greataxe',
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
    name: 'Pike',
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
    name: 'Polearm',
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
