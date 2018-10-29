import { UnitDefinition } from './unit';
import { HeadArmors, BodyArmors, Weapons, Shields } from '../equipments/definitions';

const HumanHp = 8;

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
}
