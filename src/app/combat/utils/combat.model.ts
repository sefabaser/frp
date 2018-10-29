
export interface Attack {
  hit: number;
  crictical: number;
  unparryable: boolean;
}

export interface UnitAttackReport {
  main: Attack;
  secondary: Attack | null;
}

export interface UnitDefenceReport {
  protection: number;
  block: number;
  parry: number;
}
