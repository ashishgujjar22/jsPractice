// const arr = [1, 2, 3];
// console.log(arr.__proto__ === Array.prototype);

// console.log(Array.prototype.__proto__ === Object.prototype);

// Array.prototype.sum = function() {
    
//  return this.reduce((acc,n)=>acc+n,0)
  
// }

// const nums = [1, 2, 3, 4];
// console.log(nums.sum()); // 10

//Prototype chain
// const animal = {
//   breathe() {
//     console.log(`${this.name} is breathing`);
//   }
// };

// const dog = Object.create(animal);
// dog.name = "Bruno";
// dog.bark = function() {
//   console.log("Woof!");
// };

// dog.breathe(); // kya hoga?
// dog.bark();    // kya hoga?

//Challenge 1
// String.prototype.capitalize = function(){
//     return this[0].toUpperCase()+this.slice(1)
// }
// const word = "gujjar"
// console.log(word.capitalize());

//Challenge 2
// const vehicle = {
//     start(){
//         console.log("Vehicle starting");
        
//     }
// }
// const car = Object.create(vehicle)
// car.honk=()=>{
//     console.log("Beep beep");
    
// }
// const electricCar=Object.create(car)
// electricCar.charging=()=>{
//     console.log("Charging");
    
// }
// electricCar.start();
// electricCar.honk();
// electricCar.charging();

//Challenge 3
const person = {
  name: "Gujjar",
  introduce: function(city, age) {
    console.log(`I am ${this.name} from ${city}, age ${age}`);
  }
};

const anotherPerson = { name: "Ali" };

// call — arguments alag alag dete hain
person.introduce.call(anotherPerson, "Delhi", 22);

// apply — arguments array mein dete hain
person.introduce.apply(anotherPerson, ["Delhi", 22]);

// bind — naya function return karta hai, baad mein call karo
const fn = person.introduce.bind(anotherPerson, "Delhi", 22);
fn();




 