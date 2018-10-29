import { Unit } from '../unit/unit';
import { WeaponReaching, Weapon } from '../equipments/weapon';
import { UnitAttackReport, UnitDefenceReport, Attack } from '../utils/combat.model';

export class CombatMechanism {
  static attack(attacker: Unit, defender: Unit, distance: WeaponReaching, log: string[]) {
    let attack = attacker.getAttack();
    let defence = defender.getDefence();
    this.processAttack(attacker, attack.main, defender, defence, log);

    if (attacker.offHand instanceof Weapon && attacker.offHand.reaching >= distance) {
      defence = defender.getDefence();
      log.push(`${attacker.name} is attacking ${defender.name} with his offhand weapon.`);
      this.processAttack(attacker, attack.secondary, defender, defence, log);
    }
  }

  private static processAttack(attacker: Unit, attack: Attack, defender: Unit, defence: UnitDefenceReport, log: string[]) {
    let stoppedByBlock = false;
    let stoppedByParry = false;
    let stoppedByArmor = false;

    while (defence.block) {
      if (attack.crictical) {
        attack.crictical--;
        stoppedByBlock = true;
        defender.offHand.receiveDamage();
      } else if (attack.hit) {
        attack.hit--;
        stoppedByBlock = true;
      }

      defence.block--;
    }

    while (defence.parry && !attack.unparryable) {
      if (attack.crictical) {
        stoppedByParry = true;
        defender.mainHand.receiveDamage();
      } else if (attack.hit) {
        attack.hit--;
        stoppedByParry = true;
      }

      defence.parry--;
    }

    while (defence.protection) {
      if (attack.crictical) {
        stoppedByArmor = true;
      } else if (attack.hit) {
        attack.hit--;
        stoppedByArmor = true;
      }

      defence.protection--;
    }

    let notes = [];
    if (stoppedByBlock) {
      notes.push('blocked by the shield');
    }
    if (stoppedByParry) {
      notes.push('parried by the weapon');
    }
    if (stoppedByArmor) {
      notes.push('hit to the armor');
    }

    if (attack.crictical) {
      if (stoppedByBlock || stoppedByParry || stoppedByArmor) {
        let message = `The attack ${notes.join(', ')}, but it was too strong and accurate to be stopped!`;
        log.push(`E${message} ${attacker.name} has achieved crictical hit to ${defender.name}!`);
      } else {
        log.push(`EIt was a clean hit! ${attacker.name} has achieved crictical hit to ${defender.name}!`);
      }
      defender.receiveDamage(2);
    } else if (attack.hit) {
      if (stoppedByBlock || stoppedByParry || stoppedByArmor) {
        let message = `The attack ${notes.join(', ')}, but it was too strong and accurate to be stopped!`;
        log.push(`W${message} ${attacker.name} hit ${defender.name}!`);
      } else {
        log.push(`WIt was a clean hit! ${attacker.name} hit ${defender.name}!`);
      }
      defender.receiveDamage(1);
    } else {
      if (stoppedByBlock || stoppedByParry || stoppedByArmor) {
        log.push(`The attack ${notes.join(', ')}. ${attacker.name} missed ${defender.name}!`);
      } else {
        log.push(`${attacker.name} missed ${defender.name}!`);
      }
    }

    if (defender.currentHitpoint <= 0) {
      log.push(`E${defender.name} fell to the ground. ${attacker.name} is the winner.`);
      throw attacker;
    }
  }
}
