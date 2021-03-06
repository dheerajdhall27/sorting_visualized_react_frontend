import React, {useState} from "react";
import BarComponent from "./BarComponent";

/**
 * This component is responsible for rendering the bar component
 * @param {props} The properties passed from the Sorting Component
 */
export default function GraphComponent(props) {
  
  return (
    <div className="row ml-5">
      {
        props.barData && props.barData.map((data, index, arr) => 
          <BarComponent key={index}
                        data = {data}
                        barIndicesToColor={props.barIndices}
                        length = {arr.length}
                        index = {index}/>
        )
      }
    </div>
  )
}