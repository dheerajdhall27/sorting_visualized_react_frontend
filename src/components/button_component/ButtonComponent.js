import React, { useState } from 'react';
import { ALGORITHMS_ARRAY } from '../../constants/AlgorithmsArray';
import AlgorithmButtonComponent from './algorithm_buttons_component/AlgorithmButtonComponent';
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
                                    algorithmType = {props.algorithmType}/>
        </div>

        <div className="col-3">
          <label className="font-weight-bold">ORDER-BY: </label>
          <select  className="ml-2" onChange={(e) => setOrderByAscending(e)}>
            <option value="increasing">INCREASING</option>
            <option value="decreasing">DECREASING</option>
          </select>
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
          <button className="btn-secondary" onClick={() => props.sortTheData()}>
            Sort
          </button>
        </div>

      </div>
    </div>
  );
}