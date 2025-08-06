function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids at a price of ${pricePerDroid} each. Total cost: ${totalPrice}.`;
}