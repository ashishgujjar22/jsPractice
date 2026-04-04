// //all topics revision
// //challenge 1 Q1
// function counter(){
//     let count=0;
//     return {
//          increment:function(){
//           return ++count;
//          },
//          decrement:function(){
//          if(count>0){
//            return --count;
//          }
//           throw new Error ("counter cannot be negative")
//          },
//          getCount:function(){
//           console.log(count);

//          }

//         }
//     }
//     const c = counter();
//     c.increment()
//     c.increment()
//     c.decrement()
//    c.getCount()

// //Challenge 2
// const bankAccount =()=>{
//   let balance =0;
//    return {
//     deposit:(amount)=>{
//       return balance+=amount;
//     },
//     withdrawl(amount){
//       if(balance>amount){
//       return balance-=amount;
//       }
//       throw new Error(`Insufficent balance in your account:${balance}`)
//     },
//     getBalance:function(){
//         console.log(balance);

//     }
//    }
// }

// const b=bankAccount();
// b.deposit(500)
// b.withdrawl(200)
// b.withdrawl(200)
// b.getBalance()

// //challenge 3
// function mutiplier(factor){
//     return function(number){
//         console.log(factor*number);

//     }

// }
// const double = mutiplier(2)
// double(5)
// double(8)

// //challenge 4  async& await
// async function user(){
//    try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
//     if(!response.ok){
//         throw new Error("Data not found")
//     }
//     const data = await response.json()
//     console.log(`Name: ${data.name} |  Email: ${data.email}`);

//    } catch (error) {
//     console.log(error.message);

//    }
// }
// user()

// challenge 5
async function users (){
  try {
    const user1 = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const user2= await fetch("https://jsonplaceholder.typicode.com/users/2")
    const user3 = await fetch("https://jsonplaceholder.typicode.com/users/3")

    const responses = await Promise.all([user1,user2,user3])
    
      const [u1Data,u2Data,u3Data] = await Promise.all(responses.map(res=>res.json()));
      console.log(`Name: ${u1Data.name} | Email: ${u1Data.email}`);
      console.log(`Name: ${u2Data.name} | Email: ${u2Data.email}`);
      console.log(`Name: ${u3Data.name} | Email: ${u3Data.email}`);
      

    

  } catch (error) {
    console.log(error.message);
    
  }
}users()

// //challenge 6
// async function solution() {
// await new Promise((resolve)=>{
//     setTimeout(resolve,2000)}
// )

    
// }
// solution()

//challenge 7 array methods

const students = [
  { name: "Gujjar", marks: 85, city: "Rohtak" },
  { name: "Ali", marks: 45, city: "Delhi" },
  { name: "Sara", marks: 92, city: "Rohtak" },
  { name: "Ravi", marks: 38, city: "Mumbai" },
  { name: "Priya", marks: 76, city: "Delhi" },
];

// const passStudent= students.filter((stu)=>{
//     if(stu.marks>=50){
//       console.log(`Name: ${stu.name} Marks: ${stu.marks}`);
//     }
// })

//Challenge 8 
// const capitalName = students.map((stu)=>{
//   const  name=stu.name
//    const capitalName=  name.toUpperCase()
//      console.log(capitalName);
// })

//challenge 9

// const total = students.reduce((acc,marks)=>{
//     const tMarks= marks.marks;
//    return acc+tMarks
   
// },0)
// console.log(total);

// //challenge 10

// const rohtakStudent =  students.filter(stu=>{
// return stu.city === "Rohtak"    
// })
// // console.log(rohtakStudent);
// const total = rohtakStudent.reduce((acc,marks)=>acc+marks.marks,0)

// const average = total/rohtakStudent.length
// console.log(`Average : ${average}`);

// //challenge 11


//     const sorted = [...students].sort((a, b) => b.marks - a.marks);
// console.log(sorted);



// //challenge 12
const user = {
  name: "Gujjar",
  age: 21,
  address: {
    city: "Rohtak",
    state: "Haryana",
  },
  skills: ["JavaScript", "React", "Node"],
};

// const {name,age,address:{city}}=user
// console.log(name,age,city);
//

// //challenge 13
// const userC=structuredClone(user)
// userC.address.city = "Delhi"
// console.log(user);

// console.log(userC);

// //challenge 14
// function sum(...numbers){
// const sum =numbers.reduce((acc,num)=>acc+num,0)
// console.log(sum);

  
    
// }
// sum(1,2,3,4,5)

// //challenge 15

// const arr = structuredClone(user)

// arr.skills.push("MongoDb")
// console.log(arr);

// //challenge 16

// const timer = {
//   seconds: 0,
//   start: function () {
//     setInterval( ()=> {  //replacing fun with arrow fun for fix this
//       this.seconds++;
//       console.log(this.seconds);
//     }, 1000);
//   },
// };
// timer.start()

// //challenge 17

// function introduce(city, age) {
//   console.log(`I am ${this.name} from ${city}, age ${age}`);
// }
// const p1 = { name: "Gujjar" };
// const p2 = { name: "Ali" };

// introduce.call(p1,"Rohtak",21)
// introduce.call(p2,"Delhi",22)

// //challenge 18
// function introduce(city, age) {
//   console.log(`I am ${this.name} from ${city}, age ${age}`);
// }
// const p1 = { name: "Gujjar" };
// const p2 = { name: "Ali" }; 
// const fn = introduce.bind(p2,"Delhi",22)


////challenge 19
// Array.prototype.average=function(){
//     const total=this.reduce((acc,num)=>acc+num
//     )
//     return total/this.length
// }

// const arr=[10,20,30]
// console.log(arr.average());

// //challenge 20
// const shape = {
//     area(){
//         console.log("Calculating area");
        
//     }
// }

// const rectangle = Object.create(shape)
// rectangle.perimeter=function(){
//     console.log("Calculating perimeter");
    

// }
// const square= Object.create(rectangle)
// square.diagonal = function(){
// console.log("Calculating diagonal");

// }
// square.diagonal();
// square.perimeter();
// square.area();

//challenge 21


//  String.prototype.reverse = function() {
//   return this.split("").reverse().join("");
// }
// console.log("gujjar".reverse()); // rajjug


// //challenge 22

// async function users() {
//     try {
//         const response = await fetch(" https://jsonplaceholder.typicode.com/posts")
//         const data = await response.json()
//         const fUser = data.slice(0,5)
        
//         fUser.map(user=>{
//             const {id,title}= user
//             console.log(`Id: ${id} Title: ${title}`);
            
//         })
        

//     } catch (error) {
//         console.log(error.message);
        
//     }
// }

// users()