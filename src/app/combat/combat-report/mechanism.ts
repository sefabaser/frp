import { Unit } from '../unit/unit';
import { WeaponReaching, Weapon } from '../equipments/weapon';
import { UnitDefenceReport, Attack } from '../utils/combat.model';
import { CombatStatistics, UnitStatistics } from './report';

export class CombatMechanism {
  static attack(attacker: Unit, defender: Unit, distance: WeaponReaching, statistics: CombatStatistics) {
    let attack = attacker.getAttack();
    let defence = defender.getDefence();
    let attackerStatistics = attacker.name === statistics.unit1.name ? statistics.unit1 : statistics.unit2;
    let defenderStatistics = defender.name === statistics.unit1.name ? statistics.unit1 : statistics.unit2;

    this.processAttack(attacker, attackerStatistics, attack.main, defender, defenderStatistics, defence, statistics);

    if (attacker.offHand instanceof Weapon && attacker.offHand.reaching >= distance) {
      defence = defender.getDefence();
      statistics.log.push(`${attacker.name} is attacking ${defender.name} with his offhand weapon.`);
      this.processAttack(attacker, attackerStatistics, attack.secondary, defender, defenderStatistics, defence, statistics);
    }
  }

  private static processAttack(
      attacker: Unit,
      attackerStatistics: UnitStatistics,
      attack: Attack,
      defender: Unit,
      defenderStatistics: UnitStatistics,
      defence: UnitDefenceReport,
      statistics: CombatStatistics
  ) {
    let stoppedByBlock = false;
    let stoppedByParry = false;
    let stoppedByArmor = false;

    while (defence.block) {
      if (attack.crictical) {
        attack.crictical--;
        stoppedByBlock = true;
        defenderStatistics.blockCount++;

        defender.offHand.receiveDamage();
        if (defender.offHand.currentHitpoint <= 0) {
          statistics.log.push(`E${defender.name}'s shield has been broken!`);
          defenderStatistics.shieldBroken++;
        }
      } else if (attack.hit) {
        attack.hit--;
        stoppedByBlock = true;
        defenderStatistics.blockCount++;
      }

      defence.block--;
    }

    while (defence.parry && !attack.unparryable) {
      if (attack.crictical) {
        attack.crictical--;
        stoppedByParry = true;
        defenderStatistics.parryCount++;

        defender.mainHand.receiveDamage();
        if (defender.mainHand.currentHitpoint <= 0) {
          statistics.log.push(`E${defender.name}'s weapon has been broken!`);
          defenderStatistics.weaponBroken++;
        }
      } else if (attack.hit) {
        attack.hit--;
        defenderStatistics.parryCount++;
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
        defenderStatistics.protectionCount++;
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
        statistics.log.push(`E${message} ${attacker.name} has achieved crictical hit to ${defender.name}!`);
      } else {
        statistics.log.push(`EIt was a clean hit! ${attacker.name} has achieved crictical hit to ${defender.name}!`);
      }
      attackerStatistics.cricticalHitCount++;
      defender.receiveDamage(2);
    } else if (attack.hit) {
      if (stoppedByBlock || stoppedByParry || stoppedByArmor) {
        let message = `The attack ${notes.join(', ')}, but it was too strong and accurate to be stopped!`;
        statistics.log.push(`W${message} ${attacker.name} hit ${defender.name}!`);
      } else {
        statistics.log.push(`WIt was a clean hit! ${attacker.name} hit ${defender.name}!`);
      }
      attackerStatistics.hitCount++;
      defender.receiveDamage(1);
    } else {
      if (stoppedByBlock || stoppedByParry || stoppedByArmor) {
        statistics.log.push(`The attack ${notes.join(', ')}. ${attacker.name} missed ${defender.name}!`);
      } else {
        statistics.log.push(`${attacker.name} missed ${defender.name}!`);
      }
    }

    if (defender.currentHitpoint <= 0) {
      statistics.log.push(`E${defender.name} fell to the ground. ${attacker.name} is the winner.`);
      throw attacker;
    }
  }
}
