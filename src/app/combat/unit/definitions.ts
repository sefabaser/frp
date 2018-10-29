import { UnitDefinition } from './unit';
import { HeadArmors, BodyArmors, Weapons, Shields } from '../equipments/definitions';

const HumanHp = 8;

export class Units {
  static unarmed: UnitDefinition = {
    hitPoint: HumanHp,
    head: HeadArmors.none,
    body: BodyArmors.none,
    mainHand: Weapons.unarmed,
    offHandWeapon: undefined,
    shield: undefined
  };

  static peasant: UnitDefinition = {
    hitPoint: HumanHp,
    head: HeadArmors.none,
    body: BodyArmors.none,
    mainHand: Math.random() > 0.5 ? Weapons.staff : Weapons.club,
    offHandWeapon: undefined,
    shield: undefined
  };

  static spearman: UnitDefinition = {
    hitPoint: HumanHp,
    head: HeadArmors.cap,
    body: BodyArmors.leather,
    mainHand: Weapons.spear,
    offHandWeapon: undefined,
    shield: Shields.woodenSmallShield
  };
}
