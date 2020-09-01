import React, {useState} from "react";
import BarComponent from "./BarComponent";


export default function GraphComponent(props) {
  
  return (
    <div className="row">
      {
        props.barData && props.barData.map((data, index, arr) => 
          <BarComponent key={index}
                        data = {data}
                        length = {arr.length}
                        index = {index}/>
        )
      }
    </div>
  )
}