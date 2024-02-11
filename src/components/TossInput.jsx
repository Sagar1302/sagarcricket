import React, {useEffect, useState} from 'react'
import SelectBattingorBowling from './SelectBattingorBowling'
import './TossInput.css'
import Oppdecision from './Oppdecision'

const TossInput = ({oddOrEven}) => {
  const [userTossInput, setUserTossInput] = useState('')
  const [oddOrEvenCheck, setOddOrEvenCheck] = useState('')
  const [displayContent, setDisplayContent] = useState(true)

  const HandleSubmit = event => {
    event.preventDefault()
    checkEvenOrOdd()
  }
  const HandleTossInput = event => {
    setUserTossInput(event.target.value)
  }

  const systemTossInput = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  const totalInput = () => {
    const num2 = systemTossInput()
    const num = parseInt(userTossInput) + num2

    return num
  }

  const checkEvenOrOdd = () => {
    const total = totalInput()
    let output
    if (total % 2 === 0) {
      output = 'even'
    } else {
      output = 'odd'
    }
    setOddOrEvenCheck(output)

    setDisplayContent(false)
  }
  useEffect(() => {}, [oddOrEvenCheck])

  return (
    <div className="tossinputdiv">
      {displayContent && (
        <form onSubmit={HandleSubmit}>
          <div>
            <label className="tossinputlabel">TYPE IN YOUR LUCKY DIGIT</label>
            <input
              type="text"
              id="tossInput"
              value={userTossInput}
              onChange={HandleTossInput}
              placeholder="Enter a number"
              required
            />
          </div>
          <button type="submit" className="inputbutton">
            Submit
          </button>
        </form>
      )}
      {!displayContent &&
        (oddOrEvenCheck === oddOrEven ? (
          <SelectBattingorBowling />
        ) : (
          <Oppdecision />
        ))}
    </div>
  )
}

export default TossInput
