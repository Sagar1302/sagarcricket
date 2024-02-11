import React, { useEffect, useState } from 'react'
import "./Bowlingsecond.css"
import Toss from "./Toss"
import End from './End'

const BowlingSecond = ({score}) => {
    const [defendScore, setDefendScore] = useState(score)
    const [systemScore, setSystemScore] = useState(0)
    const [lastRunDefended ,setLastRunDefended] = useState(0)
    const [displayContent, setDisplayContent] = useState(true)
    const [matchResult , setMatchResult] = useState(false)
    const [systemLastRun, setSystemLastRun] = useState(0)
    const [rematch ,setRematch] = useState(false)
    const [finalDecision, setFinalDecision] = useState(true)


    useEffect(() =>{
       // setDefendScore(defendScore-1)
       checkOut()
    },[defendScore,displayContent,lastRunDefended,systemScore])

    // function generateRandomNumber() {
    //     // Generate a random number between 1 and 6
    //     return Math.floor(Math.random() * 6) + 1;
    //   }
      
      function HandleClick(run) {
        //event.preventDefault()
        const randomScore = Math.floor(Math.random() * 6) + 1;
        setSystemScore(systemScore + randomScore);
        setSystemLastRun(randomScore)
        setLastRunDefended(parseInt(run));
        setDefendScore(defendScore - randomScore)
        //checkOut()
        // switch (randomScore) {
        //   case '1':
        //     setDefendScore(defendScore - 1)
        //     break;
        //   case '2':
        //     setDefendScore(defendScore - 2) 
        //     break;
        //   case '3':
        //     setDefendScore(defendScore - 3) 
        //     break;
        //   case '4':
        //     setDefendScore(defendScore - 4) 
        //     break;
        //   case '5':
        //     setDefendScore(defendScore - 5)
        //     break;
        //   case '6':
        //     setDefendScore(defendScore - 6) 
        //     break;
        //   default:
        //     break;
        // }
      }
      
     function checkOut() {
        if ((defendScore <= 0 || systemScore >= score)){
             if(systemScore!=0){ 
          setDisplayContent(false)
          setMatchResult(false)
          console.log("You're out!matee",systemLastRun);
          console.log("ooooo",lastRunDefended)
        }
    }
        else if(systemLastRun === lastRunDefended)
        {
            if(systemLastRun!=0 && lastRunDefended!=0){
            setDisplayContent(false)
            setMatchResult(true)
            console.log("you won the matchhhhhhh",systemLastRun);
            console.log("yaaeee",lastRunDefended)
            }
        }
        // if (defendScore <= 0 || systemScore >= score) {
        //     setDisplayContent(false);
        //     setMatchResult(systemLastRun === lastRunDefended);
        // }
    }
        
          //<BowlingSecond />
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
    {displayContent && (<>
    <p className='opponentscorepara'>   OPPONENT'S LAST INPUT: <span className='score'> {systemLastRun}</span></p>
    <p className='opponentscorepara'>YOUR'S LAST INPUT:<span className='score'> {lastRunDefended}</span> </p>
    <p className='opponenttotalscore'>OPPONENT NEEDS <span className='score'> {defendScore}</span> RUNS TO WIN</p>
    <div className='buttonrow'>
        <button className='bowlingbutton' onClick={() => HandleClick('1')}>1</button>
        <button className='bowlingbutton' onClick={() => HandleClick('2')}>2</button>
        <button className='bowlingbutton' onClick={() => HandleClick('3')}>3</button>
        <button className='bowlingbutton' onClick={() => HandleClick('4')}>4</button>
        <button className='bowlingbutton' onClick={() => HandleClick('5')}>5</button>
        <button className='bowlingbutton' onClick={() => HandleClick('6')}>6</button>
        {/* <button onClick={() => HandleClick('dot')}>dot</button> */}
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

export default BowlingSecond