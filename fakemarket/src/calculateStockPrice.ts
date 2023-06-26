function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
let numUp = 0;
let numDown = 0;
const calcPrice = (curPrice: number) => {
  let chance = getRandomNumber(0, 100);

  console.log(`num UP: ${numUp}         numDown: ${numDown}\n`);

  if (chance > 98 && chance < 98.5 && numDown < numUp + 3) {
    console.log(`Chance: ${chance}`);
    curPrice = curPrice * 0.97;
    numDown++;
    console.log("DOWN");
  } else if (chance < 2.1 && chance > 1.5 && numUp < numDown + 5) {
    console.log(`Chance: ${chance}`);
    curPrice = curPrice * 1.03;
    numUp++;
    console.log("UP");
  } else {
    let difference = getRandomNumber(-0.005, 0.005);
    curPrice += curPrice * difference;
  }
  return curPrice;
};

export default calcPrice;
