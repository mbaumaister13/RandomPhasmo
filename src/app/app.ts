import { Component, ElementRef, ViewChild } from '@angular/core';
import { EQUIPMENT, Equipment, ResultingEquipment, Tier } from './const/equipment.const';
import { MatButton, MatIconButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    MatButton,
    NgOptimizedImage,
    MatIconButton,
    MatIcon
  ],
  styleUrl: './app.scss'
})
export class App {

  @ViewChild('equipmentContainer')
  equipmentContainer?: ElementRef;

  equipment: Equipment[] = structuredClone(EQUIPMENT);
  randomized = false;

  output: ResultingEquipment[] = [];

  handleTierToggled(equipment: Equipment, tier: Tier) {
    const index = equipment.selectedTiers?.findIndex(t => t === tier)
    if (index !== -1) {
      equipment.selectedTiers.splice(index, 1);
    } else {
      equipment.selectedTiers.push(tier);
    }
  }

  decrementMin(equipment: Equipment) {
    if (equipment.currentMinAmount > equipment.minAmount) {
      equipment.currentMinAmount--;
    }
  }

  incrementMin(equipment: Equipment) {
    if (equipment.currentMinAmount < equipment.currentMaxAmount) {
      equipment.currentMinAmount++;
    } else {
      if (equipment.currentMaxAmount < equipment.maxAmount) {
        equipment.currentMinAmount++;
        equipment.currentMaxAmount++;
      }
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
    }
  }

  incrementMax(equipment: Equipment) {
    if (!equipment.currentMinAmount) {
      equipment.selectedTiers = [1, 2, 3];
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
          imgPath: item.imgPath
        } as ResultingEquipment);
      } else {
        this.output.push({
          name: item.name,
          amount: 0
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
