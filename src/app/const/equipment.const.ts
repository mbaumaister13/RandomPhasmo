export type Tier = 1 | 2 | 3;

export interface Equipment {
  name: string;
  selectedTiers: Tier[];
  minAmount: number;
  maxAmount: number;
  currentMinAmount: number;
  currentMaxAmount: number;
  imgPath: string;
}

export interface ResultingEquipment {
  name: string;
  tier?: Tier;
  amount: number;
  imgPath: string;
}

export const EQUIPMENT: Equipment[] = [
  {
    name: "Flashlight",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'flashlight'
  },
  {
    name: "Crucifix",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'crucifix'
  },
  {
    name: "Incense",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'incense'
  },
  {
    name: "Sanity Medication",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'sanity-meds'
  },
  {
    name: "Igniter",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'igniter'
  },
  {
    name: "Sound Recorder",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'sound-recorder'
  },
  {
    name: "Photo Camera",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 3,
    currentMinAmount: 0,
    currentMaxAmount: 3,
    imgPath: 'photo-camera'
  },

  {
    name: "Video Camera",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'video-camera'
  },
  {
    name: "Thermometer",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'thermometer'
  },
  {
    name: "D.O.T.S Projector",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'dots'
  },
  {
    name: "EMF Reader",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'emf'
  },
  {
    name: "UV Light",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'uv-light'
  },
  {
    name: "Spirit Box",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'spirit-box'
  },
  {
    name: "Firelight",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'firelight'
  },
  {
    name: "Ghost Writing Book",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'ghost-writing-book'
  },
  {
    name: "Salt",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 3,
    currentMinAmount: 0,
    currentMaxAmount: 3,
    imgPath: 'salt'
  },
  {
    name: "Motion Sensor",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'motion-sensor'
  },
  {
    name: "Head Gear",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'head-gear'
  },
  {
    name: "Parabolic Microphone",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 2,
    currentMinAmount: 0,
    currentMaxAmount: 2,
    imgPath: 'parabolic-microphone'
  },
  {
    name: "Tripod",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'tripod'
  },
  {
    name: "Sound Sensor",
    selectedTiers: [1, 2, 3],
    minAmount: 0,
    maxAmount: 4,
    currentMinAmount: 0,
    currentMaxAmount: 4,
    imgPath: 'sound-sensor'
  },
]