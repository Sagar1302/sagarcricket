import React from 'react'
import { useState,useEffect} from 'react';
//import BowlingSecond from './BowlingSecond';
import "./Battingsecond.css"
import Toss from "./Toss"
import End from "./End"

const Battingsecond = ({systemScoreToDefend}) => {
    const [score, setScore] = useState(0);
    const [systemScore, setSystemScore] = useState(0);
    const [lastRunScored, setLastRunScored] = useState(0);
    const [displayContent, setDisplayContent] = useState(true)
    const [scoreToWin, setScoreToWin] = useState(systemScoreToDefend)
    const [matchResult, setMatchResult] = useState(true)
    const [rematch ,setRematch] = useState(false)
    const [finalDecision, setFinalDecision] = useState(true)

useEffect(() => {
   // console.log("System Score To Defend:", systemScoreToDefend);
  checkOut();
}, [systemScore, lastRunScored,scoreToWin]);

// function generateRandomNumber() {
//   // Generate a random number between 1 and 6
//   return Math.floor(Math.random() * 6) + 1;
// }

function HandleClick(run) {
  const randomScore = Math.floor(Math.random() * 6) + 1;
  setSystemScore(randomScore);
  
  setLastRunScored(parseInt(run));
  //checkOut()
    setScoreToWin(scoreToWin-parseInt(run))
  switch (run) {
    case '1':
      setScore(score + 1);
      break;
    case '2':
      setScore(score + 2);
      break;
    case '3':
      setScore(score + 3);
      break;
    case '4':
      setScore(score + 4);
      break;
    case '5':
      setScore(score + 5);
      break;
    case '6':
      setScore(score + 6);
      break;
    default:
      break;
  }
}

function checkOut() {
  if (systemScore === lastRunScored && systemScore!==0 && lastRunScored!==0 ){ 
    setDisplayContent(false)
    console.log("You're out!",systemScore);
    console.log("ooooo",lastRunScored)
    setMatchResult(false)
    }
    else if(score>=systemScoreToDefend){
        setDisplayContent(false)
        console.log("yoouu wooon",systemScore);
        console.log("ooooo",lastRunScored)
    }

    }
    const handleToss =()=> {
      setRematch(true)
      setFinalDecision(false)
  }

  const handleEnd = () =>{
    setRematch(false)
    setFinalDecision(false)
  }
  return (
    <>
   {displayContent && ( <>
   <p className='secondbattingpara'>OPPONENT'S LAST INPUT: <span className='score'> {systemScore}</span></p>
   <p className='secondbattingpara'>YOUR LAST INPUT: <span className='score'> {lastRunScored}</span></p>
   <p className='secondbattingtotalscore'>YOU NEED <span className='score'> {scoreToWin}</span> RUNS TO WIN </p>
   <div className='secondbattingbuttonrow'>
        <button className=" secondbattingbutton" onClick={() => HandleClick('1')}>1</button>
        <button className=" secondbattingbutton" onClick={() => HandleClick('2')}>2</button>
        <button className=" secondbattingbutton" onClick={() => HandleClick('3')}>3</button>
        <button className=" secondbattingbutton" onClick={() => HandleClick('4')}>4</button>
        <button className=" secondbattingbutton" onClick={() => HandleClick('5')}>5</button>
        <button className=" secondbattingbutton" onClick={() => HandleClick('6')}>6</button>
        {/* <button className=" secondbattingbutton" onClick={() => HandleClick('dot')}>dot</button> */}
      </div></>)}
      {
        !displayContent && !matchResult && finalDecision && (<>
        <p className='opponentendpara'>!!.........YOU LOST THE MATCH.........!!</p>
        <p className='opponentendpara'>WOULD YOU LIKE TO PLAY AGAIN ?</p>
        <div className='buttonendrow'>
      <button className='bowlingendbutton' onClick={handleToss}>YES</button>
    <button className='bowlingendbutton' onClick={handleEnd}>NO</button>
    </div></>)
    }
    {!displayContent && matchResult && finalDecision && (<>
    <p className='opponentendpara'>!!.........YOU WON THE MATCH.........!!</p>
    <p className='opponentendpara'>WOULD YOU LIKE TO PLAY AGAIN ?</p>
    <div className='buttonendrow'>
      <button className='bowlingendbutton' onClick={handleToss}>YES</button>
    <button className='bowlingendbutton' onClick={handleEnd}>NO</button>
    </div></>)}
    {!finalDecision && (rematch == true ?<Toss />:<End />)}
    </>
  )
}

export default Battingsecond