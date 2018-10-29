import { Unit } from '../unit/unit';
import { WeaponReaching, Weapon } from '../equipments/weapon';
import { UnitAttackReport, UnitDefenceReport, Attack } from '../utils/combat.model';

type AttackResult = 'miss' | 'hit' | 'crictical';

export class CombatMechanism {
  static attack(attacker: Unit, defender: Unit, distance: WeaponReaching, log: string[]) {
    let attack = attacker.getAttack();
    let defence = defender.getDefence();
    let attackResult = this.processAttack(attack.main, defence, log);
    this.processAttackResult(attacker, defender, attackResult, log);

    if (attacker.offHand instanceof Weapon && attacker.offHand.reaching >= distance) {
      defence = defender.getDefence();
      log.push(`${attacker.name} is attacking ${defender.name} with his offhand weapon.`);
      attackResult = this.processAttack(attack.secondary, defence, log);
      this.processAttackResult(attacker, defender, attackResult, log);
    }
  }

  private static processAttack(attack: Attack, defence: UnitDefenceReport, log: string[]): AttackResult {
    log.push(`${JSON.stringify(attack)} / ${JSON.stringify(defence)}`);
    // log.push(`${attacker.name} is attacking ${defender.name} with his offhand weapon.`);
    return 'hit';
  }

  private static processAttackResult(attacker: Unit, defender: Unit, attackResult: AttackResult, log: string[]) {
    if (attackResult === 'hit') {
      log.push(`W${attacker.name} Hit ${defender.name}!`);
      defender.receiveDamage(1);
    } else if (attackResult === 'crictical') {
      log.push(`E${attacker.name} has achieved crictical hit to ${defender.name}!`);
      defender.receiveDamage(2);
    }

    if (defender.currentHitpoint <= 0) {
      log.push(`E${defender.name} fell to the ground. ${attacker.name} is the winner.`);
      throw attacker;
    }
  }
}
