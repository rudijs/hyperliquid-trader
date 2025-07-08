type Gear = {
  name: string;
  speed: number;
};

export const main = (gear: Gear) => {
  return `Speed is: ${gear.speed}`;
};
