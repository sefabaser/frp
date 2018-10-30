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
      if (entry[0] === 'E') {
        console.error(entry.substr(1));
      } else if (entry[0] === 'W') {
        console.warn(entry.substr(1));
      } else {
        console.log(entry);
      }
    }
  }

  print() {
    this.normalizeStatistics(this.unit1);
    this.normalizeStatistics(this.unit2);
    this.combatDuration = this.combatDuration / BulkLimit;
    console.warn('Awarage combat duration: ', this.combatDuration);
    console.warn(this.unit1);
    console.warn(this.unit2);
  }

  private normalizeStatistics(unitStatistics: UnitStatistics) {
    unitStatistics.win = unitStatistics.win * 100 / BulkLimit;
    unitStatistics.blockCount = unitStatistics.blockCount / BulkLimit;
    unitStatistics.parryCount = unitStatistics.parryCount / BulkLimit;
    unitStatistics.protectionCount = unitStatistics.protectionCount / BulkLimit;
    unitStatistics.shieldBroken = unitStatistics.shieldBroken * 100 / BulkLimit;
    unitStatistics.weaponBroken = unitStatistics.weaponBroken * 100 / BulkLimit;
    unitStatistics.hitCount = unitStatistics.hitCount / BulkLimit;
    unitStatistics.cricticalHitCount = unitStatistics.cricticalHitCount / BulkLimit;
  }
}

export class CombatReport {
  processDuel(unit1: UnitDefinition, unit2: UnitDefinition, bulkDuel: 'bulk' | 'single') {
    this.checkUnitNames(unit1, unit2);
    let statistics = new CombatStatistics(unit1.name, unit2.name);

    if (bulkDuel === 'bulk') {
      for (let i = 0; i <= BulkLimit; i++) {
        statistics.log = [];
        this.duel(unit1, unit2, statistics);
      }
      statistics.print();
    } else {
      this.duel(unit1, unit2, statistics);
      statistics.printLog();
    }
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
