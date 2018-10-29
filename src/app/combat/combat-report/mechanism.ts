import { Unit } from '../unit/unit';

export class CombatMechanism {
  static attack(attacker: Unit, defender: Unit, log: string[]) {
    this.damageUnit(attacker, defender, 1, log);
  }

  private static damageUnit(attacker: Unit, defender: Unit, damage: number, log: string[]) {
    log.push(`W${damage} damage!`);
    defender.receiveDamage(damage);

    if (defender.currentHitpoint <= 0) {
      log.push(`${defender.name} fell to the ground. ${attacker.name} is the winner.`);
      throw attacker;
    }
  }
}
