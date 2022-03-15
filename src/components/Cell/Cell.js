import React from "react";
import classes from "./Cell.module.css";

const Cell = ({ boxValue, sendBoxToDelete }) => {
  return (
    <div className={classes.cellContainer} onClick={sendBoxToDelete}>
      {boxValue}
    </div>
  );
};

export default Cell;
