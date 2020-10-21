import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import stringMath from 'string-math';

function App() {
  const [lauseke, setLauseke] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");

  // 0-9 + - * /
  const valueClick=(value) => {
    if(lauseke === 0){
      setLauseke(value); // replace leading zero
    } else {
      setLauseke(lauseke + "" + value); // rakenna string
    }
  }
  
  // =
  const laskutoimitus=() => {
    try {
      setLauseke(stringMath(lauseke)); 
      setErrorMsg(""); // tyhjennä mahdolliset errorit
    } catch (error) {
      console.log(error)
      setErrorMsg("Error! :(") // näytä errorviesti
    }
  }

  // C
  const reset=() => {
    setLauseke(0); // tyhjennä lauseke
    setErrorMsg(""); // tyhjennä mahdolliset errorit
  }

  // JSX
  return (
    <div>

      <div class="calculator">
        <div class="calculatorHeader"><p>{lauseke}</p></div>
        <div class="calculatorButtonsGrid">
        <button class="calculatorButton" onClick={() => valueClick(1)}>1</button>
        <button class="calculatorButton" onClick={() => valueClick(2)}>2</button>
        <button class="calculatorButton" onClick={() => valueClick(3)}>3</button>
        <button class="calculatorButton" id="operator" onClick={() => valueClick("+")}>+</button>

        <button class="calculatorButton" onClick={() => valueClick(4)}>4</button>
        <button class="calculatorButton" onClick={() => valueClick(5)}>5</button>
        <button class="calculatorButton" onClick={() => valueClick(6)}>6</button>
        <button class="calculatorButton" id="operator" onClick={() => valueClick("-")}>-</button>

        <button class="calculatorButton" onClick={() => valueClick(7)}>7</button>
        <button class="calculatorButton" onClick={() => valueClick(8)}>8</button>
        <button class="calculatorButton" onClick={() => valueClick(9)}>9</button>
        <button class="calculatorButton" id="operator" onClick={() => valueClick("*")}>*</button>

        <button class="calculatorButton" id="bluebuttons" onClick={reset}>C</button>
        <button class="calculatorButton" onClick={() => valueClick(0)}>0</button>
        <button class="calculatorButton" id="bluebuttons" onClick={laskutoimitus}>=</button>
        <button class="calculatorButton" id="operator" onClick={() => valueClick("/")}>/</button>
        </div>
        <p class="errorMessage">{errorMsg}</p>

      </div>
    </div>
  );
}
export default App;