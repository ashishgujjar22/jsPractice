// const getFirstAndRest = (...number)=>{
// const [First,...rest] = number
// // console.log(number);

// console.log(`First: ${First}`);
// console.log(`Rest: ${rest}`);


// }

// getFirstAndRest(1,2,3,4,5)

//Second Way
const getFirstAndRest = (first, ...rest) => {
  console.log(`First: ${first}`);
  console.log(`Rest: ${rest}`);
}
getFirstAndRest(1,2,3,4,5)
