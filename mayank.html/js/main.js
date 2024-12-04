// const terminalClock =()=>{
//     setInterval(() =>{
//         console.clear()
//       const now = new Date();
//       const hours = String(now.getHours()).padStart(2,'0');
//       const minutes = String(now.getMinutes()).padStart(2,'0');
//       const seconds = String(now.getSeconds()).padStart(2,'0');
//       console.log(`${hours}:${minutes}:${seconds}`);
//     }, 1000)
// }
// terminalClock();

const arithmetic = (a,b,fnToCall) =>  {
  let result;
  let value =  fnToCall(result)
  console.log(value);
}
const sum = (a,b) =>{
  return a+b;
}
const sub = (a,b) => {
  return a-b;
}
arithmetic(3,4,sum);