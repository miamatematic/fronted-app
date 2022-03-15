import React, { useState } from "react";
import Plus from "../../assets/plus.svg";
import Minus from "../../assets/minus.svg";

import classes from "./Counter.module.css";
import Cell from "../Cell/Cell";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState([]);

  const subtraction = () => {
    setCounter(counter - 1);
    setValues((prevState) => [...prevState, counter - 1]);
  };

  const addition = () => {
    setCounter(counter + 1);
    setValues((prevState) => [...prevState, counter + 1]);
  };

  const onBackspaceClick = () => {
    const valuesCopy = [...values];
    valuesCopy.pop();
    setValues(valuesCopy);
  };

  const onReset = () => {
    setValues([]);
    setCounter(0);
  };

  const deleteBox = (index) => {
    const valuesCopy = [...values];
    valuesCopy.splice(index, 1);
    setValues(valuesCopy);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.counterSection}>
        <button className={classes.operatorButton} onClick={subtraction}>
          <img src={Minus} alt="Minus sign" />
          <div className="margin-left-20">ADD</div>
        </button>
        <div className={classes.counterDisplay}>{counter}</div>
        <button className={classes.operatorButton} onClick={addition}>
          <img src={Plus} alt="Plus sign" />
          <div className="margin-left-20">ADD</div>
        </button>
      </div>
      <div className={classes.buttonSection}>
        <div className={classes.txt}>Values</div>
        <div>
          <button
            className={`${classes.button} margin-right-32`}
            onClick={onBackspaceClick}
          >
            DELETE
          </button>
          <button className={classes.button} onClick={onReset}>
            RESET
          </button>
        </div>
      </div>
      <div className={classes.valuesSection}>
        {values.map((value, index) => (
          <Cell
            key={index}
            boxValue={value}
            sendBoxToDelete={() => deleteBox(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Counter;
