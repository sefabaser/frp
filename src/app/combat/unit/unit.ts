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
    return {
      main: this.mainHand.getAttack(),
      secondary: this.offHand instanceof Weapon ? this.offHand.getAttack() : { hit: 0, crictical: 0 }
    };
  }

  getDefence(): UnitDefenceReport {
    return {
      protection: this.head.getProtection() + this.body.getProtection(),
      block: this.offHand instanceof Shield ? this.offHand.getBlock() : 0,
      parry: this.mainHand.getParry() + (this.offHand instanceof Weapon ? this.offHand.getParry() : 0)
    };
  }

  receiveDamage(damage) {
    this.currentHp -= damage;
  }
}
