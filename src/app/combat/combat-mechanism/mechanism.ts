import { Unit } from '../unit/unit';

export class CombatMechanism {
  static attack(attacker: Unit, defender: Unit, log: string[]) {
    defender.receiveDamage(1);

    if (defender.currentHitpoint <= 0) {
      log.push(`${defender.name} fell to the ground. ${attacker.name} is the winner.`);
      throw {};
    }
  }
}
