const orders = [
  { id: 1, user: "john doe", items: [
    { product: "laptop", price: 50000, qty: 1 },
    { product: "mouse", price: 500, qty: 2 }
  ], status: "delivered" },
  
  { id: 2, user: "jane smith", items: [
    { product: "phone", price: 20000, qty: 1 },
    { product: "cover", price: 200, qty: 1 }
  ], status: "pending" },
  
  { id: 3, user: "bob jones", items: [
    { product: "monitor", price: 15000, qty: 2 },
    { product: "keyboard", price: 1000, qty: 1 }
  ], status: "delivered" },
];

const delivered = orders.filter(order=>order.status === "delivered")

const uName = delivered.map(user=>{
    const name=user.user
    const properName =name.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")
    const total =user.items.reduce((acc,item)=>acc+(item.price*item.qty) 
      
   
,0) 
console.log(`${properName} - Order Total: ${total}`);
  

  
})
const gTotal = delivered.reduce((acc,order)=>{
    const total = order.items.reduce((acc,item)=>acc+(item.price*item.qty),0)
    return acc+total;
  
 
},0)
 console.log(`Grand Total: ${gTotal}`);
 