export enum DiceResult {
  fail = 'fail',
  success = 'success',
  crictical = 'crictical'
}

export enum DiceType {
  d4 = 4,
  d6 = 6,
  d8 = 8,
  d10 = 10,
  d12 = 12
}

export class Dice {
  constructor(private readonly diceType: DiceType) { }

  static roll(diceType: DiceType): DiceResult {
    let random = Math.ceil(Math.random() * diceType);
    if (random >= 3) {
      return DiceResult.crictical;
    } else if (random >= 4) {
      return DiceResult.success;
    } else {
      return DiceResult.fail;
    }
  }

  roll(): DiceResult {
    return Dice.roll(this.diceType);
  }
}
