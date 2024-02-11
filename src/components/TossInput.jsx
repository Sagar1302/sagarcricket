import React, { useEffect, useState } from 'react'
//import Battingsecond from './Battingsecond';
import SelectBattingorBowling from './SelectBattingorBowling';
// import BowlingFirst from './BowlingFirst';
import "./TossInput.css"
import Oppdecision from './Oppdecision';


const TossInput = ({oddOrEven}) => {
    const [userTossInput ,setUserTossInput] = useState("");
    const [oddOrEvenCheck ,setOddOrEvenCheck] = useState("");
    const [displayContent, setDisplayContent] = useState(true);

    const HandleSubmit = (event) => {
        event.preventDefault()
        checkEvenOrOdd()
        
    }
    const HandleTossInput = (event) => {
        setUserTossInput(event.target.value)
        
    }

    const systemTossInput =() =>{
        return Math.floor(Math.random()*10) +1
    }

    const totalInput = () =>{
        const num2 =systemTossInput()
        const num =(parseInt(userTossInput) + num2)
        console.log("total num ",num)
        console.log("usertossinput ",parseInt(userTossInput))
        console.log("systemtossinput ",num2)


        return num
    }

    const checkEvenOrOdd = () =>{
        const total = totalInput();
        let output;
        if( total %2 === 0){
          output = "even"
          //console.log("odeven",output)
        }else{
          output = "odd"
         // console.log("oddffd",output)
        }
        setOddOrEvenCheck(output)
        //console.log("--d",output)
        console.log("o--ffd",oddOrEvenCheck)
       setDisplayContent(false);
       
    }
    useEffect(() => {
      console.log(`usefeect: ${oddOrEvenCheck}`);
      console.log(`usefeect: ${displayContent}`);

      //battingOrder()
    }, [oddOrEvenCheck]);

    
    // const battingOrder = () =>{
    //   console.log("checkOddOrEveeen:", oddOrEvenCheck);
    //    console.log("oddOrEven prop:", oddOrEven);
        // oddOrEvenCheck === oddOrEven ? <SelectBattingorBowling /> :<Battingsecond />
    // }
   
  return (
    <div className='tossinputdiv'>
       {displayContent && (<form onSubmit={HandleSubmit}>
      <div>
        <label className="tossinputlabel">TYPE IN YOUR LUCKY DIGIT</label>
        <input
          type="text"
          id="tossInput"
          value={userTossInput}
          onChange={HandleTossInput}
          placeholder='Enter a number'
          required 
        />
      </div>
      <button type="submit" className='inputbutton'>Submit</button>
      </form>)}
      {!displayContent && (oddOrEvenCheck === oddOrEven ? <SelectBattingorBowling /> :<Oppdecision />)}
    </div>
  )
}

export default TossInput

/*import React, { useState } from 'react';
import Battingsecond from './Battingsecond';
import SelectBattingorBowling from './SelectBattingorBowling';

const TossInput = ({ oddOrEven }) => {
    const [userTossInput, setUserTossInput] = useState("");
    const [oddOrEvenCheck, setOddOrEvenCheck] = useState("");
    

    const HandleSubmit = (event) => {
        event.preventDefault();
        checkEvenOrOdd();
    };

    const HandleTossInput = (event) => {
        setUserTossInput(event.target.value);
    };

    const systemTossInput = () => {
        return Math.floor(Math.random() * 10) + 1;
    };

    const totalInput = () => {
        const num2 = systemTossInput();
        const num = parseInt(userTossInput) + num2;
        return num;
    };

    const checkEvenOrOdd = () => {
        const total = totalInput();
        let output;
        if (total % 2 === 0) {
            output = "even";
        } else {
            output = "odd";
        }
        setOddOrEvenCheck(output);
        setDisplayContent(false); // Hide content after submitting
    };

    return (
        <>
            {displayContent && (
                <form onSubmit={HandleSubmit}>
                    <div>
                        <label htmlFor="tossInput">Enter a Number:</label>
                        <input
                            type="text"
                            id="tossInput"
                            value={userTossInput}
                            onChange={HandleTossInput}
                            placeholder='Enter a number'
                            required
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
            {/* Conditionally render components based on oddOrEvenCheck }
           {!displayContent && (oddOrEvenCheck === oddOrEven ? <SelectBattingorBowling /> : <Battingsecond />)}
        </>
    );
};*/

//export default TossInput;

