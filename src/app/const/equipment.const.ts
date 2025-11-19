export type Tier = 1 | 2 | 3;

export interface Equipment {
  name: string;
  selectedTiers: Tier[];
  maxAmount: number;
}

export interface ResultingEquipment {
  name: string;
  tier?: Tier;
  amount: number;
}

export const EQUIPMENT: Equipment[] = [
  {
    name: "Flashlight",
    selectedTiers: [1, 2, 3],
    maxAmount: 4
  },
  {
    name: "Sound Recorder",
    selectedTiers: [1, 2, 3],
    maxAmount: 2
  },
  {
    name: "Crucifix",
    selectedTiers: [1, 2, 3],
    maxAmount: 2
  },
  {
    name: "Photo Camera",
    selectedTiers: [1, 2, 3],
    maxAmount: 3
  },
  {
    name: "Incense",
    selectedTiers: [1, 2, 3],
    maxAmount: 4
  },
  {
    name: "Video Camera",
    selectedTiers: [1, 2, 3],
    maxAmount: 4
  },
  {
    name: "Sanity Medication",
    selectedTiers: [1, 2, 3],
    maxAmount: 4
  },
  {
    name: "Thermometer",
    selectedTiers: [1, 2, 3],
    maxAmount: 2
  },
  {
    name: "Igniter",
    selectedTiers: [1, 2, 3],
    maxAmount: 4
  },
  {
    name: "D.O.T.S Projector",
    selectedTiers: [1, 2, 3],
    maxAmount: 2
  },
  {
    name: "Firelight",
    selectedTiers: [1, 2, 3],
    maxAmount: 4
  },
  {
    name: "EMF Reader",
    selectedTiers: [1, 2, 3],
    maxAmount: 2
  },
  {
    name: "Salt",
    selectedTiers: [1, 2, 3],
    maxAmount: 3
  },
  {
    name: "UV Light",
    selectedTiers: [1, 2, 3],
    maxAmount: 2
  },
  {
    name: "Sound Sensor",
    selectedTiers: [1, 2, 3],
    maxAmount: 4
  },
  {
    name: "Spirit Box",
    selectedTiers: [1, 2, 3],
    maxAmount: 2
  },
  {
    name: "Motion Sensor",
    selectedTiers: [1, 2, 3],
    maxAmount: 4
  },
  {
    name: "Ghost Writing Book",
    selectedTiers: [1, 2, 3],
    maxAmount: 2
  },
  {
    name: "Head Gear",
    selectedTiers: [1, 2, 3],
    maxAmount: 4
  },
  {
    name: "Parabolic Microphone",
    selectedTiers: [1, 2, 3],
    maxAmount: 2
  },
  {
    name: "Tripod",
    selectedTiers: [1, 2, 3],
    maxAmount: 4
  }
]