// date: 07-10-2022
import './MyCounter.css'
// stateless
import React, { useState } from 'react'

var title = document.title='Functional Counter App'
document.title=title;
const MyCounter = () => {
  const initialValue = 0
  const [counter, setCounter] = useState(initialValue)
  const countPlus = () => {
    setCounter(counter + 1)
  }

  // const countMinus = () => {
  //   setCounter(counter - 1)
  // }

  // const countMinus = () => {
  //   counter > 0 ? setCounter(counter - 1) : setCounter(0)
  // }

  return (
    <>
      <div id='container'>
        <div id='container-box'>
          <div id='app-title'>
            <h1>{title}</h1>
          </div>
          <div id='result'>
            <h1>Lest's Start Counting : {counter}</h1>
          </div>
          <div id='bottom'>
            <button title='Increment' onClick={() => setCounter(counter + 1)}>Increase</button>
            <button title='Decrement till zero'
              onClick={() =>
                counter > 0 ? setCounter(counter - 1) : setCounter(0)
              }
            >
              Decrease
            </button>
            <button title='Decrement in Negative Value' className='button2' onClick={() => setCounter(counter - 1)}>
              -1
            </button>
            <br></br>
            <button onClick={() => setCounter(0)}>Reset</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyCounter
