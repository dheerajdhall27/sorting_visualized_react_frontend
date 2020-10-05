import React from 'react'

/**
 * This component represents each individual bar component 
 * @param {props} This refers to the properties passed over from the Graph Component
 */
export default function BarComponent (props) {
  const barStyle = {
    backgroundColor: props.barIndicesToColor.includes(props.index) ? "lightgreen" : "lightblue",
    width: "1.4vw",
    height: `${props.data * 20 / 100}vh`,
    transform: "rotateZ(180deg) translate(0px, -40vh)",
    transformOrigin: "top left",
    border: "1px solid black",
    borderRadius: "5px",
  };

  return (
    <div key={props.index}
         className="bars"
         style={barStyle}>
    </div>
  );
}