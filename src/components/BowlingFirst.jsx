import React from 'react'
import {useState, useEffect} from 'react'
import './Bowlingfirst.css'
import Wickettaken from './Wickettaken'

const BowlingFirst = () => {
  const [systemScore, setSystemScore] = useState(0)
  const [lastRunDefended, setLastRunDefended] = useState(0)
  const [displayContent, setDisplayContent] = useState(true)
  const [matchResult, setMatchResult] = useState(false)
  const [systemLastRun, setSystemLastRun] = useState(0)

  useEffect(() => {
    checkOut()
  }, [systemScore])

  function HandleClick(run) {
    const randomScore = Math.floor(Math.random() * 6) + 1
    setSystemScore(systemScore + randomScore)
    setSystemLastRun(randomScore)
    setLastRunDefended(parseInt(run))
  }

  function checkOut() {
    if (
      systemLastRun === lastRunDefended &&
      systemLastRun != 0 &&
      lastRunDefended != 0
    ) {
      setDisplayContent(false)
      setMatchResult(true)
      console.log('you got the wicket', systemLastRun)
      console.log('yaaeee', lastRunDefended)
      console.log('systemscore', systemScore)
    }
  }

  return (
    <>
      {displayContent && (
        <>
          <p className="bowlingfirstpara">
            OPPONENT'S LAST INPUT:
            <span className="score"> {systemLastRun}</span>
          </p>
          <p className="bowlingfirstpara">
            YOUR'S LAST INPUT:<span className="score"> {lastRunDefended}</span>
          </p>
          <p className="opponentscore">
            OPPONENT'S SCORE<span className="score"> {systemScore}</span>
          </p>
          <div className="bowlingfirstbuttonrow">
            <button
              className="bowlingfirstbutton"
              onClick={() => HandleClick('1')}>
              1
            </button>
            <button
              className="bowlingfirstbutton"
              onClick={() => HandleClick('2')}>
              2
            </button>
            <button
              className="bowlingfirstbutton"
              onClick={() => HandleClick('3')}>
              3
            </button>
            <button
              className="bowlingfirstbutton"
              onClick={() => HandleClick('4')}>
              4
            </button>
            <button
              className="bowlingfirstbutton"
              onClick={() => HandleClick('5')}>
              5
            </button>
            <button
              className="bowlingfirstbutton"
              onClick={() => HandleClick('6')}>
              6
            </button>
          </div>
        </>
      )}
      {!displayContent && (
        <Wickettaken runstowin={systemScore - systemLastRun + 1} />
      )}
    </>
  )
}

export default BowlingFirst
