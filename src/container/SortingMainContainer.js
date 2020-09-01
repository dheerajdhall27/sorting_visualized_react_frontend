import React from 'react';
import ButtonComponent from "../components/button_component/ButtonComponent";
import GraphComponent from "../components/graph_component/GraphComponent";
import {sortTheData} from "../services/SortingService";

class SortingMainContainer extends React.Component {

  state = {
    totalBars: 100,
    algorithmType: 0,
    orderByAscending: true,
    numberData: [...Array(100)].map(() => Math.floor(Math.random() * 100)),
    oldNumberData: []
  };

  updateNumberOfBars = (num) => {
    this.setState({
      totalBars: num
    });

    this.createRandomArray();
  };

  createRandomArray = () => {
    let arr = [];
    for (let i = 0; i < this.state.totalBars; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    this.setState({
      oldNumberData: [...this.state.numberData],
      numberData: arr
    });
  };

  sortData = (list, algorithmType, orderByAscending) => {
    sortTheData({
      data: this.state.numberData,
      sortingAlgorithmType: this.state.algorithmType,
      isOrderedByAscending: this.state.orderByAscending
    }).then(data => this.setState(prevState => {
        return({
          ...this.state,
          numberData: data
        })
    }))
  };

  render() {
    return (
        <div className="ml-5">
          <ButtonComponent updateBars={this.updateNumberOfBars}
                           sortTheData={() => this.sortData(this.state.numberData,
                               this.state.algorithmType,
                               this.state.orderByAscending)}/>
          <GraphComponent numberData={this.state.numberData}
                          indexData={this.state.indexData}/>
        </div>
    );
  }
}

export default SortingMainContainer;
