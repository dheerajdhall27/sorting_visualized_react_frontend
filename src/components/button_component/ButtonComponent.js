import React from 'react';

class ButtonComponent extends React.Component {

  getInputValue = (e) =>
      e.target.value;

  render() {
    return(
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
              <select className="ml-2">
                <option value="increasing">Increasing</option>
                <option value="decreasing">Decreasing</option>
              </select>
            </div>
            <div className="col-3">
              <label>Number of bars: </label>
              <input type="range"
                     min="100"
                     max="200"
                     className="ml-2"
                     onChange={e => this.props.updateBars(this.getInputValue(e))}
              />
            </div>
            <div className="col-3">
              <button className="btn-secondary"
                      onClick={this.props.sortTheData}>
                Sort
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default ButtonComponent;
