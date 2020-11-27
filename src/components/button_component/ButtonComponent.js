import React, { useState } from 'react';
import { ALGORITHMS_ARRAY } from '../../constants/AlgorithmsArray';
import AlgorithmButtonComponent from './algorithm_buttons_component/AlgorithmButtonComponent';
import OrderingComponent from './ordering_component/OrderingComponent';
import {MIN_BARS, MAX_BARS, MIN_SPEED, MAX_SPEED} from "../../constants/Constants";
/**
 * This component is responsible for rendering the button that are part of the application.
 * @param {props} This refers to the properties passed by the Sorting Component
 */

export default function ButtonComponent (props) {

  const getInputValue = (e) => {
    return Number(e.target.value);
  }


  const setOrderByAscending = (e) => {
    props.setOrderByAscending(e.target.value === "increasing")
  }

  return (
    <div className="mt-2">
      <div>
        <div>
          <AlgorithmButtonComponent algorithmData = {ALGORITHMS_ARRAY}
                                    setAlgorithmType = {props.setAlgorithmType}
                                    algorithmType = {props.algorithmType}
                                    />
        </div>

        <div className="mt-4">
          <OrderingComponent setOrderByAscending={props.setOrderByAscending}
                             orderData={["INCREASING", "DECREASING"]}
                             orderByType= {props.orderByType}/>
        </div>

        <div className="row mt-4">
          <label className="font-weight-bold ml-2">SPEED: </label>
            <input type="range"
                   min={MIN_SPEED}
                   max={MAX_SPEED}
                   className="ml-2"
                   onChange={e => props.setAlgoSpeed(MAX_SPEED + 1 - getInputValue(e))}/>
        </div>

        <div className="row mt-4">
          <label className="font-weight-bold ml-2">BARS: </label>
            <input type="range"
                   min={MIN_BARS}
                   max={MAX_BARS}
                   className="ml-2"
                   onChange={e => props.setBars(getInputValue(e))}/>
        </div>

        <div className="row mt-4 p-2">
          <button className="btn-success rounded btn-sm btn-block" 
                  onClick={() => props.sortTheData()}>
            Sort
          </button>
        </div>

      </div>
    </div>
  );
}