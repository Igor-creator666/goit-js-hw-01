function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage("Germany", 120, 50)); // Shipping to Germany will cost 170 credits
console.log(getShippingMessage("USA", 80, 20)); // Shipping to USA will cost 100 credits
console.log(getShippingMessage("Japan", 100, 20)); // Shipping to Japan will cost 120 credits
