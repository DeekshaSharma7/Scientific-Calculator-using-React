import React, { useState } from "react";
import "./Calculator.css";

import { Link } from "react-router-dom";

const Calculator = ({ addToHistory }) => {
  const [display, setDisplay] = useState("");
  const [memory, setMemory] = useState(0);

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleEquals = () => {
    try {
      const result = eval(display);
      addToHistory(display + " = " + result);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleMemoryAdd = () => {
    try {
      const result = eval(display);
      setMemory(memory + result);
      setDisplay("");
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleMemorySubtract = () => {
    try {
      const result = eval(display);
      setMemory(memory - result);
      setDisplay("");
    } catch (error) {
      setDisplay("Error");
    }
  };

  const handleMemoryRecall = () => {
    setDisplay(display + memory);
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  const handleTrigFunction = (func) => {
    try {
      const radians = (Math.PI / 180) * eval(display);
      let result;
      if (func === "sin") result = Math.sin(radians);
      else if (func === "cos") result = Math.cos(radians);
      else if (func === "tan") result = Math.tan(radians);
      addToHistory(`${func}(${display}) = ${result}`);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} readOnly />
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleEquals}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button className="memory" onClick={handleMemoryAdd}>
          M+
        </button>
        <button className="memory" onClick={handleMemorySubtract}>
          M-
        </button>
        <button className="memory" onClick={handleMemoryRecall}>
          MR
        </button>
        <button className="memory" onClick={handleMemoryClear}>
          MC
        </button>
        <button className="trig" onClick={() => handleTrigFunction("sin")}>
          sin
        </button>
        <button className="trig" onClick={() => handleTrigFunction("cos")}>
          cos
        </button>
        <button className="trig" onClick={() => handleTrigFunction("tan")}>
          tan
        </button>

        <button className="history-button">
          <Link to="/history">Show History</Link>
        </button>
      </div>
    </div>
  );
};

export default Calculator;
