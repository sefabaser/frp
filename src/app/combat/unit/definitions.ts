import { UnitDefinition } from './unit';
import { HeadArmors, BodyArmors, Weapons, Shields } from '../equipments/definitions';

const HumanHp = 5;

export class Units {
  static unarmed: UnitDefinition = {
    name: 'Unarmed Civilian',
    hitPoint: HumanHp,
    head: HeadArmors.none,
    body: BodyArmors.none,
    mainHand: Weapons.unarmed,
    offHandWeapon: undefined,
    shield: undefined
  };

  static peasantWithStaff: UnitDefinition = {
    name: 'Peasant with Staff/Trident',
    hitPoint: HumanHp,
    head: HeadArmors.none,
    body: BodyArmors.none,
    mainHand: Weapons.staff,
    offHandWeapon: undefined,
    shield: undefined
  };

  static peasantWithClub: UnitDefinition = {
    name: 'Peasant with Club',
    hitPoint: HumanHp,
    head: HeadArmors.none,
    body: BodyArmors.none,
    mainHand: Weapons.club,
    offHandWeapon: undefined,
    shield: undefined
  };

  static spearman: UnitDefinition = {
    name: 'Spearman',
    hitPoint: HumanHp,
    head: HeadArmors.cap,
    body: BodyArmors.leather,
    mainHand: Weapons.spear,
    offHandWeapon: undefined,
    shield: Shields.woodenSmallShield
  };

  static swordsman: UnitDefinition = {
    name: 'Swordsman',
    hitPoint: HumanHp,
    head: HeadArmors.cap,
    body: BodyArmors.leather,
    mainHand: Weapons.longSword,
    offHandWeapon: undefined,
    shield: Shields.woodenSmallShield
  };

  static twoHandedSwordsman: UnitDefinition = {
    name: 'Two Handed Swordsman',
    hitPoint: HumanHp,
    head: HeadArmors.cap,
    body: BodyArmors.leather,
    mainHand: Weapons.greatSword,
    offHandWeapon: undefined,
    shield: undefined
  };
}
