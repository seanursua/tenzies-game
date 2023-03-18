import React from "react";

function Die(props) {
  return (
    <div
      style={{ backgroundColor: props.isHeld ? "#59E391" : "#FFFFFF" }}
      className="dice"
      onClick={props.holdDice}
    >
      <h2 className="dice-num">{props.value}</h2>
    </div>
  );
}

export default Die;
