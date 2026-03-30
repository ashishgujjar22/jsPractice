const cart1 = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 }
];

const cart2 = [
  { name: "Keyboard", price: 1000 },
  { name: "Monitor", price: 15000 }
];

const cart3 = [...cart1,...cart2]

console.log(cart3);
