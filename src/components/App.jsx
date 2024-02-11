
import React, { useEffect, useState } from 'react';
import Toss from './Toss';
import Header from './Header';


function App() {
 

  return (
    <>
    <Header />
    <Toss />
      
    </>
  );
}

export default App;



// //import logo from './logo.svg';
// //import './App.css';
// import {useEffect, useReducer, useState} from 'react';




// function App() {
//   const [score,setScore] = useState(0)   
//   const [systemScore, setSystemScore] = useState(null) 
//   const[lastRunScored , setLastRunScored] = useState(null)
//   //const[randomNumber , setRandomNumber] = useState(0)

//   function generateRandomNumber(){

//     let conditionSatisfied = true
   
  
//     while(conditionSatisfied){
  
//       setSystemScore(Math.floor(( Math.random() * 6 ))+ 1)
  
//       if(systemScore !== 5){
//         conditionSatisfied = false
//       }
//     }
//    // return randomNumber
//   }
  
//   const reducer = (state,action) => {
  
//     switch(action.type){
//       case "1":
//         return setScore(score => score +1)
//       case "2":
//         return setScore(score => score +2)
//       case "3":
//         return setScore(score => score +3)
//       case "4":
//         return setScore(score => score +4)
//       case "6":
//         return setScore(score => score +6)
//       case "dot":
//         return setScore(score => score +0)
//       default:
//         return state
  
//     }
//   }
  
//   const [state,dispatch] = useReducer(reducer,score)
//   // function letplaygame(){
//   //   generateRandomNumber()

  
//   // }
  
//   // function incrementScore(runsAdded){
//   //   setScore(score+runsAdded)
//   // }
//   function HandleClick(run){
  
   
//     dispatch({type :run})
//     setLastRunScored(run)
//     generateRandomNumber()


//   }
//   const checkOut =async () =>{
//     if(systemScore === parseInt(lastRunScored) )
//     {
//       console.log("you are out")
//       setScore(0)
//     }
//   }
//   // useEffect(() =>{
//   //   if(systemScore === parseInt(lastRunScored) )
//   //   {
//   //     console.log("you are out" )
//   //     setScore(0)
//   //   }
//   // },[systemScore,lastRunScored])
//   useEffect(() => {
//     const fetchData = async () => {
//       checkOut();
//     };
//     fetchData();
//   }, [systemScore,lastRunScored]);
  
//   return (
//   <>
//     <p>SYSTEM Num : {systemScore}</p>
//     <p>your last run:{lastRunScored}</p>
//     <p>YOURS SCORE : {score}</p>



//     <div>
//       <button onClick = {() =>HandleClick("1")} > 1 </button>
//       <button onClick = {() =>HandleClick("2")} > 2 </button>
//       <button onClick = {() =>HandleClick("3")} > 3 </button>
//       <button onClick = {() =>HandleClick("4")} > 4 </button>
//       <button onClick = {() =>HandleClick("6")} > 6 </button>
//       <button onClick = {() =>HandleClick("dot")} > dot </button>
//     </div>
//   </>
//     );
// }

// export default App;