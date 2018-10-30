import { UnitDefinition } from '../unit/unit';
import { CombatScene } from './scene';

const BulkLimit = 10000;

export class UnitStatistics {
  blockCount = 0;
  protectionCount = 0;
  parryCount = 0;
  hitCount = 0;
  cricticalHitCount = 0;
  weaponBroken = 0;
  shieldBroken = 0;
  win = 0;

  constructor(public name: string) { }
}

export class CombatStatistics {
  log: string[] = [];
  combatDuration = 0;
  unit1: UnitStatistics;
  unit2: UnitStatistics;

  constructor(name1: string, name2: string) {
    this.unit1 = new UnitStatistics(name1);
    this.unit2 = new UnitStatistics(name2);
  }

  printLog() {
    for (let entry of this.log) {
      if (entry[0] === 'E:') {
        console.error(entry.substr(2));
      } else if (entry[0] === 'W:') {
        console.warn(entry.substr(2));
      } else {
        console.log(entry);
      }
    }
  }

  normalize(count: number) {
    this.combatDuration = this.combatDuration / count;
    this.normalizeStatistics(this.unit1, count);
    this.normalizeStatistics(this.unit2, count);
  }

  private normalizeStatistics(unitStatistics: UnitStatistics, count: number) {
    unitStatistics.win = unitStatistics.win * 100 / count;
    unitStatistics.blockCount = unitStatistics.blockCount / count;
    unitStatistics.parryCount = unitStatistics.parryCount / count;
    unitStatistics.protectionCount = unitStatistics.protectionCount / count;
    unitStatistics.shieldBroken = unitStatistics.shieldBroken * 100 / count;
    unitStatistics.weaponBroken = unitStatistics.weaponBroken * 100 / count;
    unitStatistics.hitCount = unitStatistics.hitCount / count;
    unitStatistics.cricticalHitCount = unitStatistics.cricticalHitCount / count;
  }
}

export class CombatReport {
  processDuel(unit1: UnitDefinition, unit2: UnitDefinition, bulkDuel: 'bulk' | 'single'): CombatStatistics {
    this.checkUnitNames(unit1, unit2);
    let statistics = new CombatStatistics(unit1.name, unit2.name);

    if (bulkDuel === 'bulk') {
      for (let i = 0; i <= BulkLimit; i++) {
        statistics.log = [];
        this.duel(unit1, unit2, statistics);
        statistics.normalize(BulkLimit);
      }
    } else {
      this.duel(unit1, unit2, statistics);
      statistics.normalize(1);
    }

    return statistics;
  }

  private checkUnitNames(unit1: UnitDefinition, unit2: UnitDefinition) {
    unit1 = JSON.parse(JSON.stringify(unit1));
    unit2 = JSON.parse(JSON.stringify(unit2));

    if (unit1.name === unit2.name) {
      unit1.name += ' 1';
      unit2.name += ' 2';
    }
  }

  private duel(unit1: UnitDefinition, unit2: UnitDefinition, statistics: CombatStatistics) {
    let combatScene = new CombatScene(unit1, unit2, statistics);
    combatScene.handleTheBattle();
  }
}
