const counter = {
  count: 0,
  increment: function () {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  },
};
const coount =counter.increment.bind(counter); // expected: 1
coount()

//Challenge 2
// const calculator = {
//   value: 0,
//   add: function(n) {
//     this.value+=n
//     return {
//         subtract:(n)=>{
//             this.value-=n
//             return {
//                 getResult:()=>{
//                     console.log(this.value);
                    
//                 }
//             }
//         }
//     }
//   }
// };
// calculator.add(10).subtract(3).getResult();

// //Challenge 3
// const team = {
//   name: "Dev Team",
//   members: ["Gujjar", "Ali", "Sara"],
//   showMembers: function () {
//     this.members.forEach((member) => {
//       console.log(`${this.name}: ${member}`); // fix karo
//     });
//   },
// };
// team.showMembers();
