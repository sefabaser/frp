import { UnitDefinition, Unit } from '../unit/unit';
import { WeaponReaching } from '../equipments/weapon';
import { CombatMechanism } from '../combat-mechanism/mechanism';

export class CombatScene {
  private unit1: Unit;
  private unit2: Unit;

  constructor(unit1: UnitDefinition, unit2: UnitDefinition) {
    let log: string[] = [];
    this.unit1 = new Unit(unit1);
    this.unit2 = new Unit(unit2);

    try {
      this.approachRound(log);
      while (true) {
        this.attackRound(log);
      }
    } catch (err) {
      console.log(log);
    }
  }

  private approachRound(log: string[]) {
    if (this.unit1.mainHand.reaching === WeaponReaching.reaching && this.unit2.mainHand.reaching !== WeaponReaching.reaching) {
      this.approach(this.unit1, this.unit2, log);
      log.push(`${this.unit1.name} stayed one tile away.`);
      this.attack(this.unit1, this.unit2, log);
      this.approach(this.unit2, this.unit1, log);
      this.attackOfOpportunity(this.unit1, this.unit2, log);
      this.attack(this.unit2, this.unit1, log);
      this.counterAttack(this.unit1, this.unit2, log);
    } else if (this.unit2.mainHand.isReachingMoreThan(this.unit1.mainHand.reaching)) {
      this.approach(this.unit1, this.unit2, log);
      this.attackOfOpportunity(this.unit2, this.unit1, log);
      this.attackRound(log);
    } else {
      this.approach(this.unit1, this.unit2, log);
      this.attackRound(log);
    }
  }

  private attackRound(log: string[]) {
    this.attack(this.unit1, this.unit2, log);
    this.counterAttack(this.unit2, this.unit1, log);
    this.attack(this.unit2, this.unit1, log);
    this.counterAttack(this.unit1, this.unit2, log);
  }

  private approach(approachingUnit: Unit, targetUnit: Unit, log: string[]) {
    log.push(`${approachingUnit.name} is approaching to ${targetUnit.name}.`);
  }

  private attack(attacker: Unit, defender: Unit, log: string[]) {
    log.push(`${attacker.name} is attacking to ${defender.name}.`);
    CombatMechanism.attack(attacker, defender, log);
  }

  private counterAttack(attacker: Unit, defender: Unit, log: string[]) {
    log.push(`${attacker.name} is counter attacking to ${defender.name}.`);
    CombatMechanism.attack(attacker, defender, log);
  }

  private attackOfOpportunity(attacker: Unit, defender: Unit, log: string[]) {
    log.push(`${attacker.name} has a chance to do an attack of opportunity to ${defender.name}.`);
    CombatMechanism.attack(attacker, defender, log);
  }
}
