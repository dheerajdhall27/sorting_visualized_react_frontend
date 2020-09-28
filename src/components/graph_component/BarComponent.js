import React from 'react'

/**
 * This component represents each individual bar component 
 * @param {props} This refers to the properties passed over from the Graph Component
 */
export default function BarComponent (props) {
  const barStyle = {
    backgroundColor: props.barIndicesToColor.includes(props.index) ? "lightgreen" : "lightblue",
    width: (window.innerWidth / (props.length + 5)),
    height: props.data  * 3,
    transform: "rotateZ(180deg) translate(0px, -600px)",
    transformOrigin: "top left",
    border: "1px solid black",
    borderRadius: "5px"
  };

  return (
    <div key={props.index}
         className="bars"
         style={barStyle}>
    </div>
  );
}