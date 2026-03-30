//challenge 1 -map()+filter()
const users = [
  { id: 1, name: "john doe", age: 25 },
  { id: 2, name: "jane smith", age: 17 },
  { id: 3, name: "bob jones", age: 30 },
];

// const Names = users
//   .filter((u) => u.age >= 18)
//   .map((user) => user.name.toUpperCase());

// console.log(Names);

//Challenge 2 :- map()+split+join+slice
//first way

// const Name = "john doe";

// // Step 1 — split
// const words = Name.split(" ");
// console.log(words); // ["john", "doe"]

// // Step 2 — map — har word ka pehla letter capital
// const capitalized = wordskala aur add kr diya J ke saath
// console.log(capitalized); // ["John", "Doe"]

// // Step 3 — join wapas
// const result = capitalized.join(" ");
// console.log(result); // "John Doe" convert array ko string me

//Second way
// const Names = users.map(user=>{
//   const name=user.name
//  return name.split(" ").map(word => (word[0].toUpperCase()+ word.slice(1) )).join(" ")});
// // console.log(Names);

// //Challenge 3 reduce()
// const cart = [
//   { name: "Laptop", price: 50000, qty: 1 },
//   { name: "Mouse", price: 500, qty: 2 },
//   { name: "Keyboard", price: 1000, qty: 1 },
//   { name: "Monitor", price: 15000, qty: 2 },
// ];

// const Total = cart.reduce((acc,item)=>
//   acc+(item.price*item.qty),0)
// console.log(Total);

const orders = [
  { user: "john doe", amount: 5000, status: "delivered" },
  { user: "jane smith", amount: 3000, status: "pending" },
  { user: "bob jones", amount: 8000, status: "delivered" },
  { user: "alice brown", amount: 2000, status: "pending" },
];

const delivered = orders.filter(order=>order.status === "delivered")

 delivered.map((user) => {
    const name = user.user;
    const Name=name
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
      console.log(`${Name}: ${user.amount}`);
      
      
  });


const total = delivered.reduce((acc, item) => acc + item.amount, 0);

console.log("Total Delivered:", total);
