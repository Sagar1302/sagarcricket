import React from 'react'
import {useState, useEffect} from 'react'
import './Battingfirst.css'
import Battingout from './Battingout'

const Battingfirst = () => {
  const [score, setScore] = useState(0)
  const [systemScore, setSystemScore] = useState(0)
  const [lastRunScored, setLastRunScored] = useState(0)
  const [displayContent, setDisplayContent] = useState(true)

  useEffect(() => {
    checkOut()
  }, [systemScore, lastRunScored])

  function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1
  }

  function HandleClick(run) {
    const randomScore = generateRandomNumber()
    setSystemScore(randomScore)
    setLastRunScored(run)

    switch (run) {
      case '1':
        setScore(score + 1)
        break
      case '2':
        setScore(score + 2)
        break
      case '3':
        setScore(score + 3)
        break
      case '4':
        setScore(score + 4)
        break
      case '5':
        setScore(score + 5)
        break
      case '6':
        setScore(score + 6)
        break
      default:
        break
    }
  }

  async function checkOut() {
    if (
      systemScore === parseInt(lastRunScored) &&
      systemScore !== 0 &&
      lastRunScored !== 0
    ) {
      setDisplayContent(false)
    }
  }
  return (
    <div>
      {displayContent && (
        <>
          <p className="scorepara">
            OPPONENT'S LAST INPUT :<span className="score"> {systemScore}</span>
          </p>
          <p className="scorepara">
            YOUR'S LAST INPUT :<span className="score"> {lastRunScored}</span>
          </p>
          <p className="yourtotalscore">
            YOUR SCORE<span className="score"> {score}</span>
          </p>
          <div className="buttonrow">
            <button className="battingdiv" onClick={() => HandleClick('1')}>
              1
            </button>
            <button className="battingdiv" onClick={() => HandleClick('2')}>
              2
            </button>
            <button className="battingdiv" onClick={() => HandleClick('3')}>
              3
            </button>
            <button className="battingdiv" onClick={() => HandleClick('4')}>
              4
            </button>
            <button className="battingdiv" onClick={() => HandleClick('5')}>
              5
            </button>
            <button className="battingdiv" onClick={() => HandleClick('6')}>
              6
            </button>
          </div>
        </>
      )}
      {!displayContent && <Battingout finalscore={score - lastRunScored + 1} />}
    </div>
  )
}

export default Battingfirst
