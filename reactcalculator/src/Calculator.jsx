import React from 'react'
import { useState } from 'react'

function Calculator() {

    let [value, setValue]= useState("");
    let [result, setResult] = useState(null);

    let handleButtonClick = (e) => {
            setValue(value + e.target.value)
    }
    let findResult = () => {
        console.log(eval(value))
        setResult(eval(value))
        setValue(eval(value))
    }

  return (
    <div>
        <h1>Calculator</h1>
        <div>
            <input type='text' value={value} onChange={e=>setValue(e.target.value)}></input>
            <button onClick={findResult}>Calculate</button>
        </div>
        <div>
            <button value="7" onClick={handleButtonClick}>7</button>
            <button value="8" onClick={handleButtonClick}>8</button>
            <button value="9" onClick={handleButtonClick}>9</button>
            <button value="+" onClick={handleButtonClick}>+</button>
        </div>
        <div>
            <button value="4" onClick={handleButtonClick}>4</button>
            <button value="5" onClick={handleButtonClick}>5</button>
            <button value="6" onClick={handleButtonClick}>6</button>
            <button value="-" onClick={handleButtonClick}>-</button>
        </div>
        <div>
            <button value="1" onClick={handleButtonClick}>1</button>
            <button value="2" onClick={handleButtonClick}>2</button>
            <button value="3" onClick={handleButtonClick}>3</button>
            <button value="*" onClick={handleButtonClick}>*</button>
        </div>
        <div>
            <button value="0" onClick={handleButtonClick}>0</button>
            <button value="." onClick={handleButtonClick}>.</button>
            <button value="/" onClick={handleButtonClick}>/</button>
            <button value="=" onClick={findResult}>=</button>
        </div>
        <div>
            Result: {result}
        </div>
    </div>
  )
}

export default Calculator