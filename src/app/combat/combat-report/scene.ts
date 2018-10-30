import { UnitDefinition, Unit } from '../unit/unit';
import { WeaponReaching } from '../equipments/weapon';
import { CombatMechanism } from './mechanism';
import { CombatStatistics } from './report';

export class CombatScene {
  statistics: CombatStatistics;

  private unit1: Unit;
  private unit2: Unit;

  constructor(unit1: UnitDefinition, unit2: UnitDefinition, statistics: CombatStatistics) {
    this.unit1 = new Unit(unit1);
    this.unit2 = new Unit(unit2);
    this.statistics = statistics;
  }

  handleTheBattle() {
    try {
      this.approachRound();

      let counter = 0;
      while (true) {
        this.attackRound();

        counter++;
        if (counter > 10000) {
          console.error('counter has exceeded the limit');
          break;
        }
      }
    } catch (winner) {
      if (this.unit1 === winner) {
        this.statistics.unit1.win++;
      } else {
        this.statistics.unit2.win++;
      }
    }
  }

  private approachRound() {
    if (this.unit1.mainHand.reaching === WeaponReaching.reaching && this.unit2.mainHand.reaching !== WeaponReaching.reaching) {
      this.approach(this.unit1, this.unit2);
      this.statistics.log.push(`${this.unit1.name} stayed one tile away.`);
      this.attack(this.unit1, this.unit2, WeaponReaching.reaching);
      this.approach(this.unit2, this.unit1);
      this.attackOfOpportunity(this.unit1, this.unit2, this.unit2.mainHand.reaching + 1);
      this.attack(this.unit2, this.unit1, WeaponReaching.none);
      this.counterAttack(this.unit1, this.unit2, WeaponReaching.none);
      this.statistics.combatDuration++;
    } else if (this.unit2.mainHand.isReachingMoreThan(this.unit1.mainHand.reaching)) {
      this.approach(this.unit1, this.unit2);
      this.attackOfOpportunity(this.unit2, this.unit1, this.unit1.mainHand.reaching + 1);
      this.attackRound();
    } else {
      this.approach(this.unit1, this.unit2);
      this.attackRound();
    }
  }

  private attackRound() {
    this.statistics.combatDuration++;
    this.attack(this.unit1, this.unit2, WeaponReaching.none);
    this.counterAttack(this.unit2, this.unit1, WeaponReaching.none);
    this.attack(this.unit2, this.unit1, WeaponReaching.none);
    this.counterAttack(this.unit1, this.unit2, WeaponReaching.none);
  }

  private approach(approachingUnit: Unit, targetUnit: Unit) {
    this.statistics.log.push(`${approachingUnit.name} is approaching to ${targetUnit.name}.`);
  }

  private attack(attacker: Unit, defender: Unit, distance: WeaponReaching) {
    this.statistics.log.push(`${attacker.name} is attacking to ${defender.name}.`);
    CombatMechanism.attack(attacker, defender, distance, this.statistics);
  }

  private counterAttack(attacker: Unit, defender: Unit, distance: WeaponReaching) {
    this.statistics.log.push(`${attacker.name} is counter attacking to ${defender.name}.`);
    CombatMechanism.attack(attacker, defender, distance, this.statistics);
  }

  private attackOfOpportunity(attacker: Unit, defender: Unit, distance: WeaponReaching) {
    this.statistics.log.push(`${attacker.name} has a chance to do an attack of opportunity to ${defender.name}.`);
    CombatMechanism.attack(attacker, defender, distance, this.statistics);
  }
}
