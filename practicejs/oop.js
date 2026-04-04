// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} makes a sound`);
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log(`${this.name} says Woof!`);
//   }
// }

// const d = new Dog("Bruno");
// d.speak(); // ?
// d.bark(); // ?

// //Challenge 1
// class BankAccount {
//   constructor(owner, balance = 0) {
//     this.balance = balance;
//     this.owner = owner;
//   }
//   deposit(amount) {
//     return (this.balance += amount);
//   }
//   withdrwal(amount) {
//     if (this.balance < amount) {
//       throw new Error("Insufficent balance");
//     } else {
//       return (this.balance -= amount);
//     }
//   }
//   get balanc() {
//     return this.balance;
//   }
// }
// const acc = new BankAccount("Gujjar");
// acc.deposit(1000)
// acc.withdrwal(300)
// console.log(acc.balanc);

// // challenge 2
// class Vehicle {
//   constructor(brand, speed) {
//     this.brand = brand;
//     this.speed = speed;
//   }
//   move() {

//     console.log(`${this.brand} is moving at ${this.speed}km/h`);

//   }
// }
// class Car extends Vehicle{
//   constructor(brand,speed,doors){
//     super(brand,speed)
//     this.doors=doors
//   }
//   honk(){
//     console.log(`${this.brand} says Beep!`);

//   }
// }
// class ElectricCar extends Car{
//   constructor(brand,speed,doors,battery){
//     super(brand,speed,doors)
//     this.battery = battery
//   }
//   charge(){
//     console.log(`${this.brand} is charging - battery: ${this.battery}%`);

//   }
// }
// const c = new ElectricCar("Toyota",100,5,100)
// c.honk()
// c.charge()
// c.move()

// // challenge 3
// class Validator{
//   static isEmail(email){
//     return email.includes("@") && email.includes(".")
//   }
//   static isPassword(pass){
//     return pass.length >=8 ;
//   }
//   static isPhone(num){
//     return num.length === 10;
//   }
// }
// console.log(Validator.isEmail("gujjar@gmail.com"));
// console.log(Validator.isPassword("pass"));
// console.log(Validator.isPhone("8798767865")
// );

// // challenge 4
// class Product {
//   constructor(name, _price) {
//     this.name = name;
//     this._price = _price;
//   }
//   get price() {
//     return `Rs. ${this._price}`;
//   }
//   set price(amount) {
//     if (amount < 0) throw new Error("Price should be grater than 0");
//     return (this._price = amount);
//   }
//   static compare(p1,p2){
//        if(p1._price<p2._price)console.log(`${p1.name} is cheaper`);
//        else if(p1._price>p2._price)
//        console.log(`${p2.name} is cheaper`);
       
       
//   }
// }

// const p1 = new Product("Phone", 999);
// const p2 = new Product("Laptop", 49999);
// p1.price=12999
// console.log(p1.price);
// Product.compare(p1,p2)
