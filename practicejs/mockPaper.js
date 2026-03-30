// 


const students = [
  { name: "rahul sharma", marks: 85, passed: true },
  { name: "priya singh", marks: 45, passed: false },
  { name: "amit kumar", marks: 92, passed: true },
  { name: "neha gupta", marks: 38, passed: false },
];
const passed = students.filter(st=>st.passed == true)
const sName = passed.map(student=>{
    const stName=student.name
    const name=stName.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(" ");

//   console.log(student);
  
    
    
   
console.log(`${name}: ${student.marks}`);


}) 
const aMarks =passed.reduce((acc,marks)=>((acc+marks.marks))
    ,0)
   
// console.log(sName);

 const average = aMarks/passed.length
console.log(`Average Marks: ${average}`);

