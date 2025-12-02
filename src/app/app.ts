import { Component, ElementRef, ViewChild } from '@angular/core';
import { EQUIPMENT, Equipment, REQUIRED_EQUIPMENT, ResultingEquipment, Tier } from './const/equipment.const';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    MatButton,
    NgOptimizedImage,
    MatIconButton,
    MatIcon,
    MatCheckbox
  ],
  styleUrl: './app.scss'
})
export class App {

  @ViewChild('equipmentContainer')
  equipmentContainer?: ElementRef;

  equipment: Equipment[] = structuredClone(EQUIPMENT);
  randomized = false;

  output: ResultingEquipment[] = [];

  handleObjectiveToggled(enabled: boolean) {
    if (enabled) {
      REQUIRED_EQUIPMENT.forEach((item) => {
        const foundEquipment = this.equipment.find(e => e.name === item);
        if (foundEquipment) {
          foundEquipment.minAmount = 1;
          if (!foundEquipment.currentMinAmount) {
            foundEquipment.currentMinAmount = 1;
          }
          if (foundEquipment.currentMaxAmount && foundEquipment.selectedTiers.length === 1) {
            foundEquipment.locked = true;
          }
          if (!foundEquipment.currentMaxAmount) {
            foundEquipment.currentMaxAmount = 1;
            foundEquipment.selectedTiers = [1, 2, 3];
          }
        }
      });
    } else {
      REQUIRED_EQUIPMENT.forEach((item) => {
        const foundEquipment = this.equipment.find(e => e.name === item);
        if (foundEquipment) {
          foundEquipment.minAmount = 0;
          if (foundEquipment.selectedTiers.length > 1) {
            foundEquipment.locked = false;
          }
        }
      });
    }
  }

  handleTierToggled(equipment: Equipment, tier: Tier) {
    const index = equipment.selectedTiers?.findIndex(t => t === tier)
    if (index !== -1) {
      if (equipment.locked) {
        return;
      }
      equipment.selectedTiers.splice(index, 1);

      if (equipment.currentMinAmount > 0 && equipment.selectedTiers.length === 1) {
        equipment.locked = true;
      }
    } else {
      equipment.selectedTiers.push(tier);

      if (equipment.currentMinAmount > 0 && equipment.selectedTiers.length > 1) {
        equipment.locked = false;
      }
    }
  }

  decrementMin(equipment: Equipment) {
    if (equipment.currentMinAmount > equipment.minAmount) {
      equipment.currentMinAmount--;

      if (!equipment.currentMinAmount) {
        equipment.locked = false;
      }
    }
  }

  incrementMin(equipment: Equipment) {
    if (!equipment.currentMinAmount && !equipment.selectedTiers.length) {
      equipment.selectedTiers = [1, 2, 3];
    }

    if (equipment.currentMinAmount < equipment.currentMaxAmount) {
      equipment.currentMinAmount++;
    } else {
      if (equipment.currentMaxAmount < equipment.maxAmount) {
        equipment.currentMinAmount++;
        equipment.currentMaxAmount++;
      }
    }

    if (equipment.currentMinAmount && equipment.selectedTiers.length === 1) {
      equipment.locked = true;
    }
  }

  decrementMax(equipment: Equipment) {
    if (equipment.currentMaxAmount > equipment.currentMinAmount) {
      equipment.currentMaxAmount--;
    } else {
      if (equipment.currentMinAmount > equipment.minAmount) {
        equipment.currentMinAmount--;
        equipment.currentMaxAmount--;

      }
    }

    if (!equipment.currentMaxAmount) {
      equipment.selectedTiers = [];
      equipment.locked = false;
    }
  }

  incrementMax(equipment: Equipment) {
    if (!equipment.currentMinAmount) {
      equipment.selectedTiers = [1, 2, 3];
      equipment.locked = false;
    }

    if (equipment.currentMaxAmount < equipment.maxAmount) {
      equipment.currentMaxAmount++;
    }
  }

  randomize() {
    this.randomized = true;

    this.equipment.forEach((item) => {
      if (item.selectedTiers.length && item.currentMaxAmount > 0) {
        this.output.push({
          name: item.name,
          tier: item.selectedTiers.at(Math.floor(Math.random() * item.selectedTiers.length)),
          amount: Math.floor(Math.random() * (item.currentMaxAmount - item.currentMinAmount) + item.currentMinAmount),
          maxAmount: item.maxAmount,
          imgPath: item.imgPath
        } as ResultingEquipment);
      } else {
        this.output.push({
          name: item.name,
          amount: 0,
          maxAmount: item.maxAmount
        } as ResultingEquipment);
      }
    });

    if (this.equipmentContainer?.nativeElement) {
      this.equipmentContainer.nativeElement.scrollTop = 0;
    }
  }

  reset() {
    this.randomized = false;
    this.output = [];

    if (this.equipmentContainer?.nativeElement) {
      this.equipmentContainer.nativeElement.scrollTop = 0;
    }
  }
}
