import React, { useState } from 'react';
import { SELECTION_SORT } from "../../constants/Constants"
/**
 * This component is responsible for rendering the button that are part of the application.
 * @param {props} This refers to the properties passed by the Sorting Component
 */

export default function ButtonComponent (props) {
  const [algorithm, setAlgorithm] = useState(SELECTION_SORT);
  const [isAscending, setOrderBy] = useState(true);

  const getInputValue = (e) => {
    return Number(e.target.value);
  }

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-3">
          <label className="font-weight-bold">ALGORITHM: </label>
          <select className="ml-2" onChange={(e) => setAlgorithm(e.value)}>
            <option value="SELECTION_SORT">SELECTION SORT</option>
          </select>
        </div>

        <div className="col-3">
          <label className="font-weight-bold">ORDER-BY: </label>
          <select  className="ml-2" onChange={(e) => setOrderBy(e.value)}>
            <option value="increasing">INCREASING</option>
            <option value="decreasing">DECREASING</option>
          </select>
        </div>

        <div className="col-3">
          <label className="font-weight-bold">NUMBER OF BARS: </label>
            <input type="range"
                   min="50"
                   max="80"
                   className="ml-2"
                   onChange={e => props.setBars(getInputValue(e))}/>
        </div>

        <div className="col-3">
          <button className="btn-secondary" onClick={() => props.sortTheData(algorithm, isAscending)}>
            Sort
          </button>
        </div>

      </div>
    </div>
  );
}