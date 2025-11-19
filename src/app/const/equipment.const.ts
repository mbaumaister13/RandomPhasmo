export type Tier = 1 | 2 | 3;

export interface Equipment {
  name: string;
  selectedTiers: Tier[];
  maxAmount: number;
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
    maxAmount: 4,
    imgPath: 'flashlight'
  },
  {
    name: "Sound Recorder",
    selectedTiers: [1, 2, 3],
    maxAmount: 2,
    imgPath: 'sound-recorder'
  },
  {
    name: "Crucifix",
    selectedTiers: [1, 2, 3],
    maxAmount: 2,
    imgPath: 'crucifix'
  },
  {
    name: "Photo Camera",
    selectedTiers: [1, 2, 3],
    maxAmount: 3,
    imgPath: 'photo-camera'
  },
  {
    name: "Incense",
    selectedTiers: [1, 2, 3],
    maxAmount: 4,
    imgPath: 'incense'
  },
  {
    name: "Video Camera",
    selectedTiers: [1, 2, 3],
    maxAmount: 4,
    imgPath: 'video-camera'
  },
  {
    name: "Sanity Medication",
    selectedTiers: [1, 2, 3],
    maxAmount: 4,
    imgPath: 'sanity-meds'
  },
  {
    name: "Thermometer",
    selectedTiers: [1, 2, 3],
    maxAmount: 2,
    imgPath: 'thermometer'
  },
  {
    name: "Igniter",
    selectedTiers: [1, 2, 3],
    maxAmount: 4,
    imgPath: 'igniter'
  },
  {
    name: "D.O.T.S Projector",
    selectedTiers: [1, 2, 3],
    maxAmount: 2,
    imgPath: 'dots'
  },
  {
    name: "Firelight",
    selectedTiers: [1, 2, 3],
    maxAmount: 4,
    imgPath: 'firelight'
  },
  {
    name: "EMF Reader",
    selectedTiers: [1, 2, 3],
    maxAmount: 2,
    imgPath: 'emf'
  },
  {
    name: "Salt",
    selectedTiers: [1, 2, 3],
    maxAmount: 3,
    imgPath: 'salt'
  },
  {
    name: "UV Light",
    selectedTiers: [1, 2, 3],
    maxAmount: 2,
    imgPath: 'uv-light'
  },
  {
    name: "Sound Sensor",
    selectedTiers: [1, 2, 3],
    maxAmount: 4,
    imgPath: 'sound-sensor'
  },
  {
    name: "Spirit Box",
    selectedTiers: [1, 2, 3],
    maxAmount: 2,
    imgPath: 'spirit-box'
  },
  {
    name: "Motion Sensor",
    selectedTiers: [1, 2, 3],
    maxAmount: 4,
    imgPath: 'motion-sensor'
  },
  {
    name: "Ghost Writing Book",
    selectedTiers: [1, 2, 3],
    maxAmount: 2,
    imgPath: 'ghost-writing-book'
  },
  {
    name: "Head Gear",
    selectedTiers: [1, 2, 3],
    maxAmount: 4,
    imgPath: 'head-gear'
  },
  {
    name: "Parabolic Microphone",
    selectedTiers: [1, 2, 3],
    maxAmount: 2,
    imgPath: 'parabolic-microphone'
  },
  {
    name: "Tripod",
    selectedTiers: [1, 2, 3],
    maxAmount: 4,
    imgPath: 'tripod'
  }
]