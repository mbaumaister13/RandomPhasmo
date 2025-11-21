export type Tier = 1 | 2 | 3;

export interface Equipment {
  name: string;
  selectedTiers: Tier[];
  minAmount: number;
  maxAmount: number;
  currentMinAmount: number;
  currentMaxAmount: number;
  imgPath: string;
  locked: boolean;
}

export interface ResultingEquipment {
  name: string;
  tier?: Tier;
  amount: number;
  imgPath: string;
}

export const EQUIPMENT: Equipment[] = [
  {
    name: "D.O.T.S. Projector",
    selectedTiers: [1, 2, 3],
    minAmount: 1,
    maxAmount: 2,
    currentMinAmount: 1,
    currentMaxAmount: 2,
    imgPath: 'dots',
    locked: false
  },
  {
    name: "EMF Reader",
    selectedTiers: [1, 2, 3],
    minAmount: 1,
    maxAmount: 2,
    currentMinAmount: 1,
    currentMaxAmount: 2,
    imgPath: 'emf',
    locked: false
  },
  {
    name: "Flashlight",
    selectedTiers: [1, 2, 3],
    minAmount: 1,
    maxAmount: 4,
    currentMinAmount: 1,
    currentMaxAmount: 4,
    imgPath: 'flashlight',
    locked: false
  },
  {
    name: "Ghost Writing Book",
    selectedTiers: [1, 2, 3],
    minAmount: 1,
    maxAmount: 2,
    currentMinAmount: 1,
    currentMaxAmount: 2,
    imgPath: 'ghost-writing-book',
    locked: false
  },
  {
    name: "Spirit Box",
    selectedTiers: [1, 2, 3],
    minAmount: 1,
    maxAmount: 2,
    currentMinAmount: 1,
    currentMaxAmount: 2,
    imgPath: 'spirit-box',
    locked: false
  },
  {
    name: "Thermometer",
    selectedTiers: [1, 2, 3],
    minAmount: 1,
    maxAmount: 2,
    currentMinAmount: 1,
    currentMaxAmount: 2,
    imgPath: 'thermometer',
    locked: false
  },
  {
    name: "UV Light",
    selectedTiers: [1, 2, 3],
    minAmount: 1,
    maxAmount: 2,
    currentMinAmount: 1,
    currentMaxAmount: 2,
    imgPath: 'uv-light',
    locked: false
  },
  {
    name: "Video Camera",
    selectedTiers: [1, 2, 3],
    minAmount: 1,
    maxAmount: 4,
    currentMinAmount: 1,
    currentMaxAmount: 4,
    imgPath: 'video-camera',
    locked: false
  },
  {
    name: "Crucifix",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'crucifix',
    locked: false
  },
  {
    name: "Firelight",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'firelight',
    locked: false
  },
  {
    name: "Head Gear",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'head-gear',
    locked: false
  },
  {
    name: "Igniter",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'igniter',
    locked: false
  },
  {
    name: "Incense",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'incense',
    locked: false
  },
  {
    name: "Motion Sensor",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'motion-sensor',
    locked: false
  },
  {
    name: "Parabolic Microphone",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'parabolic-microphone',
    locked: false
  },
  {
    name: "Photo Camera",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 3,
    currentMinAmount: 0,
    currentMaxAmount: 3,
    imgPath: 'photo-camera',
    locked: false
  },
  {
    name: "Salt",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 3,
    currentMinAmount: 0,
    currentMaxAmount: 3,
    imgPath: 'salt',
    locked: false
  },
  {
    name: "Sanity Medication",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'sanity-meds',
    locked: false
  },
  {
    name: "Sound Recorder",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'sound-recorder',
    locked: false
  },
  {
    name: "Sound Sensor",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'sound-sensor',
    locked: false
  },
  {
    name: "Tripod",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'tripod',
    locked: false
  }
]