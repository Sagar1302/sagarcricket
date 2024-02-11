import React, { useEffect, useState } from 'react'
import Battingfirst from './Battingfirst'
//import Battingsecond from './Battingsecond'
import BowlingFirst from './BowlingFirst'
import "./SelectBattingorBowling.css"


const SelectBattingorBowling = () => {

    const [displayContent ,setDisplayContent] = useState(true)
    const [userChoiceInput ,setUserChoiceInput] = useState(null)

    const HandleSelectChoice=(useChoice) =>{
        setDisplayContent(false)
        setUserChoiceInput(useChoice)
    }
    useEffect (() =>{

    },[displayContent,userChoiceInput])

  return (
    <>
    
  { displayContent && ( <><p className='paratag'>YOU WON THE TOSS.!</p>
  <p className='paratag'>CHOOSE YOUR PICK</p>
   <div className="optingdiv"><button  className="optingbutton"  onClick={()=>HandleSelectChoice("battingFirst")}>Batting</button>
  <button className="optingbutton" onClick={()=>HandleSelectChoice("battingsecond")}>Bowling</button></div></>)}
  {!displayContent && ( userChoiceInput === "battingFirst" ? <Battingfirst /> : <BowlingFirst />)
  }
   </>
  )
}

export default SelectBattingorBowling