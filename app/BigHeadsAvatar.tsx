// thanks to official https://github.com/RobertBroersma/bigheads/blob/main/site/src/utils/getRandomOptions.ts
import {
  eyesMap,
  eyebrowsMap,
  mouthsMap,
  hairMap,
  facialHairMap,
  clothingMap,
  accessoryMap,
  graphicsMap,
  hatMap,
  bodyMap,
} from "@bigheads/core";

const colors = {
  skin: {
    light: {
      base: "#fdd2b2",
      shadow: "#f3ab98",
    },
    yellow: {
      base: "#FBE8B3",
      shadow: "#EDD494",
    },
    brown: {
      base: "#D8985D",
      shadow: "#C6854E",
    },
    dark: {
      base: "#A56941",
      shadow: "#8D5638",
    },
    red: {
      base: "#CC734C",
      shadow: "#B56241",
    },
    black: {
      base: "#754437",
      shadow: "#6B3D34",
    },
  },
  hair: {
    blonde: {
      base: "#FEDC58",
      shadow: "#EDBF2E",
    },
    orange: {
      base: "#D96E27",
      shadow: "#C65C22",
    },
    black: {
      base: "#592d3d",
      shadow: "#592d3d",
    },
    white: {
      base: "#ffffff",
      shadow: "#E2E2E2",
    },
    brown: {
      base: "#A56941",
      shadow: "#8D5638",
    },
    blue: {
      base: "#85c5e5",
      shadow: "#67B7D6",
    },
    pink: {
      base: "#D69AC7",
      shadow: "#C683B4",
    },
  },
  lipColors: {
    red: {
      base: "#DD3E3E",
      shadow: "#C43333",
    },
    purple: {
      base: "#B256A1",
      shadow: "#9C4490",
    },
    pink: {
      base: "#D69AC7",
      shadow: "#C683B4",
    },
    turqoise: {
      base: "#5CCBF1",
      shadow: "#49B5CD",
    },
    green: {
      base: "#4AB749",
      shadow: "#3CA047",
    },
  },
  clothing: {
    white: {
      base: "#FFFFFF",
      shadow: "#E2E2E2",
    },
    blue: {
      base: "#85c5e5",
      shadow: "#67B7D6",
    },
    black: {
      base: "#633749",
      shadow: "#5E3244",
    },
    green: {
      base: "#89D86F",
      shadow: "#7DC462",
    },
    red: {
      base: "#D67070",
      shadow: "#C46565",
    },
  },
  bgColors: {
    blue: "#85c5e5",
    // green: '#89D86F',
    // red: '#ED9191',
  },
  outline: "#592d3d",
  white: "#ffffff",
  tongue: "#f28195",
};

interface Options {
  skinTone?: keyof typeof colors.skin;
  eyes?: keyof typeof eyesMap;
  eyebrows?: keyof typeof eyebrowsMap;
  mouth?: keyof typeof mouthsMap;
  hair?: keyof typeof hairMap;
  facialHair?: keyof typeof facialHairMap;
  clothing?: keyof typeof clothingMap;
  accessory?: keyof typeof accessoryMap;
  graphic?: keyof typeof graphicsMap;
  hat?: keyof typeof hatMap;
  body?: keyof typeof bodyMap;

  hairColor?: keyof typeof colors.hair;
  clothingColor?: keyof typeof colors.clothing;
  circleColor?: keyof typeof colors.bgColors;
  lipColor?: keyof typeof colors.lipColors;
  hatColor?: keyof typeof colors.clothing;
  faceMaskColor?: keyof typeof colors.clothing;

  mask?: boolean;
  faceMask?: boolean;
  lashes?: boolean;
}

function selectRandomKey<T extends {}>(object: T) {
  return (Object.keys(object) as Array<keyof typeof object>)[
    Math.floor(Math.random() * Object.keys(object).length)
  ];
}

export function getRandomOptions(): Options {
  const skinTone = selectRandomKey(colors.skin);
  const eyes = selectRandomKey(eyesMap);
  const eyebrows = selectRandomKey(eyebrowsMap);
  const mouth = selectRandomKey(mouthsMap);
  const hair = selectRandomKey(hairMap);
  const facialHair = selectRandomKey(facialHairMap);
  const clothing = selectRandomKey(clothingMap);
  const accessory = selectRandomKey(accessoryMap);
  const graphic = selectRandomKey(graphicsMap);
  const hat = selectRandomKey(hatMap);
  const body = selectRandomKey(bodyMap);

  const hairColor = selectRandomKey(colors.hair);
  const clothingColor = selectRandomKey(colors.clothing);
  const circleColor = selectRandomKey(colors.bgColors);
  const lipColor = selectRandomKey(colors.lipColors);
  const hatColor = selectRandomKey(colors.clothing);
  const faceMaskColor = selectRandomKey(colors.clothing);

  const mask = true;
  const faceMask = false;
  const lashes = Math.random() > 0.5;

  return {
    skinTone,
    eyes,
    eyebrows,
    mouth,
    hair,
    facialHair,
    clothing,
    accessory,
    graphic,
    hat,
    body,
    hairColor,
    clothingColor,
    circleColor,
    lipColor,
    hatColor,
    faceMaskColor,
    mask,
    faceMask,
    lashes,
  };
}
