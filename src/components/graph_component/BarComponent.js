import React from 'react'

export default function BarComponent (props) {
  const barStyle = {
    backgroundColor: "lightblue",
    width: (window.innerWidth / (props.length + 5)),
    height: props.data  * 3,
    transform: "rotateZ(180deg) translate(0px, -600px)",
    transformOrigin: "top left",
    border: "1px solid black",
  };

  return (
    <div key={props.index}
         style={barStyle}>
    </div>
  );
}