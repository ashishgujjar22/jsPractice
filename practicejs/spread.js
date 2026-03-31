const cart1 = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 }
];

const cart2 = [
  { name: "Keyboard", price: 1000 },
  { name: "Monitor", price: 15000 }
];

const cart3 = [...cart1,...cart2,{name: "Webcam",price:2000}]

const total = cart3.reduce((acc,product)=>acc+product.price,0)

console.log(cart3);


console.log(`Total Price: ${total}`);


