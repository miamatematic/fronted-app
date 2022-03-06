import React from 'react';
import Plus from '../../assets/plus.svg';
import classes from './Counter.module.css';

const Counter = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.counterSection}>  
        <div className={classes.counterDisplay}></div>
        <button  className={classes.operatorButton}>
          <img src={Plus} alt="Plus sign"/>
          <div className='margin-left-20'>ADD</div>
        </button>
      </div>
      <div className={classes.buttonSection}>
        <div className={classes.txt}>Values</div>
        <div>
          <button className={`${classes.button} margin-right-32`}>DELETE</button>
          <button className={classes.button}>RESET</button>
        </div>
      </div>
      <div className={classes.valuesSection}></div>
    </div>
  );
}

export default Counter;