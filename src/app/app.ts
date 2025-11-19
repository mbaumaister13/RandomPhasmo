import { Component } from '@angular/core';
import { EQUIPMENT, Equipment, ResultingEquipment, Tier } from './const/equipment.const';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatButton } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle,
    MatButton,
    NgOptimizedImage
  ],
  styleUrl: './app.scss'
})
export class App {

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

  randomize() {
    this.randomized = true;
    this.equipment.forEach((item) => {
      if (item.selectedTiers.length) {
        this.output.push({
          name: item.name,
          tier: item.selectedTiers.at(Math.floor(Math.random() * item.selectedTiers.length)),
          amount: Math.floor(Math.random() * item.maxAmount),
          imgPath: item.imgPath
        } as ResultingEquipment);
      } else {
        this.output.push({
          name: item.name,
          amount: 0
        } as ResultingEquipment);
      }
    });
  }

  reset() {
    this.randomized = false;
    this.output = [];
  }
}
