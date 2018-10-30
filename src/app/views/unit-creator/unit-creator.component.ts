import { Component } from '@angular/core';

import { HeadArmors, BodyArmors, Shields, Weapons } from 'src/app/combat/equipments/definitions';
import { UnitDefinition } from 'src/app/combat/unit/unit';
import { IsValidDualWeapon } from 'src/app/combat/equipments/rules';

@Component({
  selector: 'app-unit-creator',
  templateUrl: './unit-creator.component.html',
  styleUrls: ['./unit-creator.component.scss']
})
export class UnitCreatorComponent {
  headArmors = HeadArmors;
  bodyArmors = BodyArmors;
  weapons = Weapons;
  shields = Shields;
  offhandWeapons = {};

  name = '';
  selectedHelm = 'none';
  selectedArmor = 'none';
  selectedWeapon = 'unarmed';
  selectedOffhandItem = 'none';

  constructor() {
    let weaponNames = Object.keys(Weapons);
    for (let weaponName of weaponNames) {
      let weapon = Weapons[weaponName];
      if (weapon.offhand) {
        this.offhandWeapons[weaponName] = weapon.offhand;
      }
    }
  }

  getUnitDefinition(): UnitDefinition {
    return {
      name: this.name,
      hitPoint: 5,
      head: this.selectedHelm !== 'none' ? HeadArmors[this.selectedHelm] : undefined,
      body: this.selectedArmor !== 'none' ? BodyArmors[this.selectedArmor] : undefined,
      mainHand: Weapons[this.selectedWeapon],
      offHandWeapon: this.offhandWeapons[this.selectedOffhandItem],
      shield: Shields[this.selectedOffhandItem]
    };
  }

  checkItemCombination() {
    let weapon = Weapons[this.selectedWeapon];
    let offhand = this.offhandWeapons[this.selectedOffhandItem];
    if (weapon.twoHanded) {
      setTimeout(() => {
        this.selectedOffhandItem = 'none';
      });
    }

    if (offhand && !IsValidDualWeapon(weapon.name, offhand.name)) {
      setTimeout(() => {
        this.selectedOffhandItem = 'none';
      });
    }
  }
}
