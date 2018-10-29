import { Armor, ArmorDefinition } from '../equipments/armor';
import { Weapon, WeaponDefinition } from '../equipments/weapon';
import { Shield, ShieldDefinition } from '../equipments/shield';
import { Weapons } from '../equipments/definitions';
import { UnitAttackReport, UnitDefenceReport } from '../combat-mechanism/combat-models';

export interface UnitDefinition {
  hitPoint: number;
  head?: ArmorDefinition;
  body?: ArmorDefinition;
  mainHand?: WeaponDefinition;
  offHandWeapon?: WeaponDefinition;
  shield?: ShieldDefinition;
}

export class Unit {
  get currentHitpoint() { return this.currentHp; }
  readonly hitpoint: number;
  private currentHp: number;

  head: Armor;
  body: Armor;
  mainHand: Weapon;
  offHand: Weapon | Shield | null;

  constructor(definition: UnitDefinition) {
    this.head = new Armor(definition.head);
    this.body = new Armor(definition.body);
    this.mainHand = new Weapon(definition.mainHand || Weapons.unarmed);

    if (definition.offHandWeapon) {
      this.offHand = new Weapon(definition.offHandWeapon);
    } else if (definition.shield) {
      this.offHand = new Shield(definition.shield);
    }

    this.hitpoint = definition.hitPoint;
    this.currentHp = definition.hitPoint;
  }

  getAttack(): UnitAttackReport {
    let result = {
      main: this.mainHand.getAttack(),
      secondary: null
    };

    if (this.offHand instanceof Weapon) {
      result.secondary = this.offHand.getAttack();
    }

    return result;
  }

  getDefence(): UnitDefenceReport {
    let result = {
      protection: this.head.getProtection() + this.body.getProtection(),
      block: 0,
      parry: 0
    };



    return result;
  }

  receiveDamage(damage) {
    this.currentHp -= damage;
  }
}
