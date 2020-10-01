import React, { useState } from 'react';
import { ALGORITHMS_ARRAY } from '../../constants/AlgorithmsArray';
import AlgorithmButtonComponent from './algorithm_buttons_component/AlgorithmButtonComponent';
import OrderingComponent from './ordering_component/OrderingComponent';
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
    <div className="mt-5">
      <div className="row">
        <div className="col-3">
          <AlgorithmButtonComponent algorithmData = {ALGORITHMS_ARRAY}
                                    setAlgorithmType = {props.setAlgorithmType}
                                    algorithmType = {props.algorithmType}
                                    />
        </div>

        <div className="col-3">
          <OrderingComponent setOrderByAscending={props.setOrderByAscending}
                             orderData={["INCREASING", "DECREASING"]}
                             orderByType= {props.orderByType}/>
        </div>

        <div className="col-2">
          <label className="font-weight-bold">SPEED: </label>
            <input type="range"
                   min="10"
                   max="1000"
                   className="ml-2"
                   onChange={e => props.setAlgoSpeed(getInputValue(e))}/>
        </div>

        <div className="col-3">
          <label className="font-weight-bold">NUMBER OF BARS: </label>
            <input type="range"
                   min="50"
                   max="80"
                   className="ml-2"
                   onChange={e => props.setBars(getInputValue(e))}/>
        </div>

        <div className="col-1">
          <button className="btn-secondary rounded btn-sm btn-block mr-3" 
                  onClick={() => props.sortTheData()}>
            Sort
          </button>
        </div>

      </div>
    </div>
  );
}