function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids at a price of ${pricePerDroid} each. Total cost: ${totalPrice}.`;
}
console.log(makeTransaction(5, 3000)); // You ordered 3 droids at a price of 1000 each. Total cost: 3000.
console.log(makeTransaction(3, 1000)); // You ordered 5 droids at a price of 2000 each. Total cost: 10000.
console.log(makeTransaction(10, 500)); // You ordered 10 droids at a price of 500 each. Total cost: 5000.
