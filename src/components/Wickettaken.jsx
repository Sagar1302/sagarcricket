import React from 'react'
import Battingsecond from './Battingsecond'
import {useState} from 'react'
import './Wickettaken.css'

const Wickettaken = ({runstowin}) => {
  const [displayContent, setDisplayContent] = useState(true)

  const handleclick = () => {
    setDisplayContent(false)
  }
  return (
    <div>
      {displayContent && (
        <>
          <p className="parawickettaken">YOU GOT A WICKET..!</p>
          <p className="parawickettaken">
            RUNS YOU NEED TO WIN <span className="score">{runstowin}</span>
          </p>
          <button className=" buttonwickettaken" onClick={() => handleclick()}>
            START BATTING
          </button>
        </>
      )}
      {!displayContent && <Battingsecond systemScoreToDefend={runstowin} />}
    </div>
  )
}

export default Wickettaken
