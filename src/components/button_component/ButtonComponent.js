import React from 'react';

export default function ButtonComponent (props) {

  const getInputValue = (e) => {
    return Number(e.target.value);
  }

  return (
    <div className="mt-5">
      <div className="row">
        <div className="col-3">
          <label>Algorithm: </label>
          <select className="ml-2">
            <option value="selection">Selection Sort</option>
          </select>
        </div>

        <div className="col-3">
          <label>Order By: </label>
          <select  className="ml-2">
            <option value="increasing">Increasing</option>
            <option value="decreasing">Decreasing</option>
          </select>
        </div>

        <div className="col-3">
          <label>Number of Bars: </label>
            <input type="range"
                   min="100"
                   max="200"
                   className="ml-2"
                   onChange={e => props.setBars(getInputValue(e))}/>
        </div>

        <div className="col-3">
          {/* <button className="btn-secondary" onClick={tsortTheData}>
            Sort
          </button> */}
        </div>

      </div>
    </div>
  );
}