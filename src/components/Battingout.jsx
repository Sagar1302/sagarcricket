import React from 'react'
import BowlingSecond from './BowlingSecond'
import {useState} from 'react'
import './Battingout.css'

const Battingout = ({finalscore}) => {
  const [displayContent, setDisplayContent] = useState(true)

  const handleclick = () => {
    setDisplayContent(false)
  }
  return (
    <div>
      {displayContent && (
        <>
          <p className="parabattingout">YOU WERE TAKEN OUT...!</p>
          <p className="parabattingout">
            RUNS YOU NEED TO DEFEND<span className="score">{finalscore}</span>
          </p>
          <button className=" buttonbattingout" onClick={() => handleclick()}>
            START BOWLING
          </button>
        </>
      )}
      {!displayContent && <BowlingSecond score={finalscore} />}
    </div>
  )
}

export default Battingout
