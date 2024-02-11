import React, {useState, useEffect} from 'react'
import TossInput from './TossInput'
import './Toss.css'

const Toss = () => {
  const [oddOrEven, setOddorEven] = useState('')
  const [displayContent, setDisplayContent] = useState(true)

  const HandleClick = userPreference => {
    setOddorEven(userPreference)
    setDisplayContent(false)
  }

  useEffect(() => {
  }, [oddOrEven])

  return (
    <>
      {displayContent && (
        <div className="gameOption">
          <h3>SELECT OPTION ODD OR EVEN</h3>
          <div className="optionButton">
            {' '}
            <button className="selectbutton" onClick={() => HandleClick('odd')}>
              ODD
            </button>
            <button
              className="selectbutton"
              onClick={() => HandleClick('even')}>
              EVEN
            </button>
          </div>
        </div>
      )}

      {!displayContent && <TossInput oddOrEven={oddOrEven} />}
    </>
  )
}

export default Toss
