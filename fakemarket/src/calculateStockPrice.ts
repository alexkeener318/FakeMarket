function getRandomNumber(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}
const calcPrice = (curPrice: number) => {
  let difference = getRandomNumber(-0.005, 0.009);
  curPrice += curPrice * difference;
  return curPrice;
};

export default calcPrice;
