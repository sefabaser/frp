import { DiceType } from '../combat-mechanism/dice';
import { ArmorDefinition } from './armor';
import { ShieldDefinition } from './shield';
import { WeaponDefinition, WeaponReaching } from './weapon';

const WoodenHitPoint = 1;
const SteelHitPoint = 4;

export class Shields {
  static woodenSmallShield: ShieldDefinition = { dice: DiceType.d6, hitPoint: WoodenHitPoint, agilityPenalty: 0 };
  static steelSmallShield: ShieldDefinition = { dice: DiceType.d6, hitPoint: SteelHitPoint, agilityPenalty: 1 };
  static woodenLargeShield: ShieldDefinition = { dice: DiceType.d8, hitPoint: WoodenHitPoint + 1, agilityPenalty: 1 };
  static steelLargeShield: ShieldDefinition = { dice: DiceType.d8, hitPoint: SteelHitPoint + 1, agilityPenalty: 2 };
}

export class HeadArmors {
  static none: ArmorDefinition = { armorClass: 0, agilityPenalty: 0 };
  static cap: ArmorDefinition = { armorClass: 1, agilityPenalty: 0 };
  static helm: ArmorDefinition = { armorClass: 2, agilityPenalty: 1 };
}

export class BodyArmors {
  static none: ArmorDefinition = { armorClass: 0, agilityPenalty: 0 };
  static leather: ArmorDefinition = { armorClass: 2, agilityPenalty: 0 };
  static chain: ArmorDefinition = { armorClass: 3, agilityPenalty: 1 };
  static plate: ArmorDefinition = { armorClass: 4, agilityPenalty: 2 };
}

export class Weapons {
  static unarmed: WeaponDefinition = {
    attackDices: [ DiceType.d6 ],
    parryDice: null,
    reaching: WeaponReaching.none,
    throwable: false,
    unparryable: true,
    hitPoint: 0,
    twoHanded: false,
    offhand: null
  };

  static club: WeaponDefinition = {
    attackDices: [ DiceType.d6, DiceType.d6 ],
    parryDice: DiceType.d6,
    reaching: WeaponReaching.short,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: false,
    offhand: null
  };

  static spear: WeaponDefinition = {
    attackDices: [ DiceType.d6, DiceType.d6 ],
    parryDice: null,
    reaching: WeaponReaching.long,
    throwable: true,
    unparryable: true,
    hitPoint: WoodenHitPoint,
    twoHanded: false,
    offhand: null
  };

  static dagger: WeaponDefinition = {
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
  };

  static shortSword: WeaponDefinition = {
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
  };

  static longSword: WeaponDefinition = {
    attackDices: [ DiceType.d8, DiceType.d8 ],
    parryDice: DiceType.d8,
    reaching: WeaponReaching.long,
    throwable: false,
    unparryable: false,
    hitPoint: SteelHitPoint,
    twoHanded: false,
    offhand: null
  };

  static handAxe: WeaponDefinition = {
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
  };

  static battleAxe: WeaponDefinition = {
    attackDices: [ DiceType.d10, DiceType.d6 ],
    parryDice: DiceType.d4,
    reaching: WeaponReaching.short,
    throwable: false,
    unparryable: false,
    hitPoint: SteelHitPoint,
    twoHanded: false,
    offhand: null
  };

  static mace: WeaponDefinition = {
    attackDices: [ DiceType.d12 ],
    parryDice: DiceType.d4,
    reaching: WeaponReaching.short,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: false,
    offhand: null
  };

  static flail: WeaponDefinition = {
    attackDices: [ DiceType.d8, DiceType.d8 ],
    parryDice: null,
    reaching: WeaponReaching.long,
    throwable: false,
    unparryable: true,
    hitPoint: SteelHitPoint,
    twoHanded: false,
    offhand: null
  };

  static staff: WeaponDefinition = {
    attackDices: [ DiceType.d6, DiceType.d6 ],
    parryDice: DiceType.d8,
    reaching: WeaponReaching.long,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: true,
    offhand: null
  };

  static greatSword: WeaponDefinition = {
    attackDices: [ DiceType.d12, DiceType.d8 ],
    parryDice: DiceType.d8,
    reaching: WeaponReaching.long,
    throwable: false,
    unparryable: false,
    hitPoint: SteelHitPoint,
    twoHanded: true,
    offhand: null
  };

  static greatAxe: WeaponDefinition = {
    attackDices: [ DiceType.d12, DiceType.d10 ],
    parryDice: DiceType.d4,
    reaching: WeaponReaching.long,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: true,
    offhand: null
  };

  static pike: WeaponDefinition = {
    attackDices: [ DiceType.d8, DiceType.d6 ],
    parryDice: DiceType.d6,
    reaching: WeaponReaching.reaching,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: true,
    offhand: null
  };

  static polearm: WeaponDefinition = {
    attackDices: [ DiceType.d10, DiceType.d4 ],
    parryDice: DiceType.d6,
    reaching: WeaponReaching.reaching,
    throwable: false,
    unparryable: false,
    hitPoint: WoodenHitPoint,
    twoHanded: true,
    offhand: null
  };
}
