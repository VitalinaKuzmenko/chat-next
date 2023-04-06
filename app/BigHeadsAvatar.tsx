// thanks to official https://github.com/RobertBroersma/bigheads/blob/main/site/src/utils/getRandomOptions.ts
import {
  theme,
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

interface Options {
  skinTone?: string;
  eyes: string;
  eyebrows: string;
  mouth: string;
  hair: string;
  facialHair: string;
  clothing: string;
  accessory: string;
  graphic: string;
  hat: string;
  body: string;
  hairColor: string;
  clothingColor: string;
  circleColor: string;
  lipColor: string;
  hatColor: string;
  faceMaskColor: string;
  mask: boolean;
  faceMask: boolean;
  lashes: boolean;
}

function selectRandomKey<T>(object: { [key: string]: T }): string {
  return Object.keys(object)[
    Math.floor(Math.random() * Object.keys(object).length)
  ];
}

export function getRandomOptions(): Options {
  const skinTone: string = selectRandomKey(theme.colors.skin) || "light";
  const eyes: string = selectRandomKey(eyesMap);
  const eyebrows: string = selectRandomKey(eyebrowsMap);
  const mouth: string = selectRandomKey(mouthsMap);
  const hair: string = selectRandomKey(hairMap);
  const facialHair: string = selectRandomKey(facialHairMap);
  const clothing: string = selectRandomKey(clothingMap);
  const accessory: string = selectRandomKey(accessoryMap);
  const graphic: string = selectRandomKey(graphicsMap);
  const hat: string = selectRandomKey(hatMap);
  const body: string = selectRandomKey(bodyMap);

  const hairColor: string = selectRandomKey(theme.colors.hair);
  const clothingColor: string = selectRandomKey(theme.colors.clothing);
  const circleColor: string = selectRandomKey(theme.colors.bgColors);
  const lipColor: string = selectRandomKey(theme.colors.lipColors);
  const hatColor: string = selectRandomKey(theme.colors.clothing);
  const faceMaskColor: string = selectRandomKey(theme.colors.clothing);

  const mask: boolean = false;
  const faceMask: boolean = false;
  const lashes: boolean = Math.random() > 0.5;

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
