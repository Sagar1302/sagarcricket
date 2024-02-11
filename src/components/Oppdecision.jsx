import React, {useState} from 'react'
import BowlingFirst from './BowlingFirst'
import './Oppdecision.css'

const Oppdecision = () => {
  const [displayContent, setDisplayContent] = useState(true)

  const handleclick = () => {
    setDisplayContent(false)
  }
  return (
    <div>
      {displayContent && (
        <>
          <p className="paraoppdecision">OPPONENT OPTED FOR BATTING</p>
          <button className=" buttonoppdecision" onClick={() => handleclick()}>
            START BOWLING
          </button>
        </>
      )}
      {!displayContent && <BowlingFirst />}
    </div>
  )
}

export default Oppdecision
