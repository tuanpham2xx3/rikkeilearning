const prices = [100, 200, 300, 400];

const totalPrice = prices.reduce((acc, num) => ((acc += num), 0));

console.log(totalPrice);
