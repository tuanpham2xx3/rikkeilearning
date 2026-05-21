const prices = [100, 200, 300, 400];

const totalPrices = prices.reduce((acc, num) => (acc += num), 0);

console.log(totalPrices);
