import { UnitDefinition, Unit } from '../unit/unit';
import { WeaponReaching } from '../equipments/weapon';
import { CombatMechanism } from './mechanism';

export class CombatScene {
  log: string[] = [];
  winner: Unit;

  private unit1: Unit;
  private unit2: Unit;

  constructor(unit1: UnitDefinition, unit2: UnitDefinition) {
    this.unit1 = new Unit(unit1);
    this.unit2 = new Unit(unit2);
  }

  start() {
    try {
      this.approachRound();
      let counter = 0;
      while (true) {
        this.attackRound();
        counter++;

        if (counter > 10000) {
          throw { error: 'counter has exceeded the limit' };
        }
      }
    } catch (winner) {
      this.winner = winner;
    }
  }

  private approachRound() {
    if (this.unit1.mainHand.reaching === WeaponReaching.reaching && this.unit2.mainHand.reaching !== WeaponReaching.reaching) {
      this.approach(this.unit1, this.unit2);
      this.log.push(`${this.unit1.name} stayed one tile away.`);
      this.attack(this.unit1, this.unit2);
      this.approach(this.unit2, this.unit1);
      this.attackOfOpportunity(this.unit1, this.unit2);
      this.attack(this.unit2, this.unit1);
      this.counterAttack(this.unit1, this.unit2);
    } else if (this.unit2.mainHand.isReachingMoreThan(this.unit1.mainHand.reaching)) {
      this.approach(this.unit1, this.unit2);
      this.attackOfOpportunity(this.unit2, this.unit1);
      this.attackRound();
    } else {
      this.approach(this.unit1, this.unit2);
      this.attackRound();
    }
  }

  private attackRound() {
    this.attack(this.unit1, this.unit2);
    this.counterAttack(this.unit2, this.unit1);
    this.attack(this.unit2, this.unit1);
    this.counterAttack(this.unit1, this.unit2);
  }

  private approach(approachingUnit: Unit, targetUnit: Unit) {
    this.log.push(`${approachingUnit.name} is approaching to ${targetUnit.name}.`);
  }

  private attack(attacker: Unit, defender: Unit) {
    this.log.push(`${attacker.name} is attacking to ${defender.name}.`);
    CombatMechanism.attack(attacker, defender, this.log);
  }

  private counterAttack(attacker: Unit, defender: Unit) {
    this.log.push(`${attacker.name} is counter attacking to ${defender.name}.`);
    CombatMechanism.attack(attacker, defender, this.log);
  }

  private attackOfOpportunity(attacker: Unit, defender: Unit) {
    this.log.push(`${attacker.name} has a chance to do an attack of opportunity to ${defender.name}.`);
    CombatMechanism.attack(attacker, defender, this.log);
  }
}
