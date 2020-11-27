import React, {useState, useEffect} from 'react';
import ButtonComponent from "../components/button_component/ButtonComponent";
import GraphComponent from "../components/graph_component/GraphComponent";
import {MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, MIN_BARS, MAX_SPEED} from "../constants/Constants";
import { AlgorithmFactory } from "../sorting_algorithms/AlgorithmFactory"

/**
 * This Component is the main component which holds the state for the
 * 1. Bars
 * 2. Algorithm Type
 * 3. The order of Sorting
 */
export function SortingComponent() {
  const [totalBars, setBars] = useState(MIN_BARS);
  const [barIndices, setBarIndex] = useState([]);
  const [algorithmType, setAlgorithmType] = useState("SELECTION_SORT");
  const [orderByType, setOrderByAscending] = useState("INCREASING");
  const [algoSpeed, setAlgoSpeed] = useState(MAX_SPEED);
  const [algoRunning, setAlgoRunning] = useState(false);


  const createRandomBars = () => {
    return [...Array(totalBars)].map(() => Math.floor(Math.random() * (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT) + MIN_BAR_HEIGHT))
  }

  const [barData, setBarData] = useState(createRandomBars());

  const sortTheData = () => {
    setAlgoRunning(true);
    let algorithmFactory = new AlgorithmFactory(algorithmType, barData, orderByType);
    let algorithm = algorithmFactory.createAlgorithm(algorithmType);
    
    algorithm.sort([...barData], orderByType, algoSpeed); 
  }

  useEffect(() => {
    setBarData(createRandomBars())

  },[totalBars])

  return (
    <div className="container-fluid">
      <div className="row ml-auto mt-2">
        <div className="col-2 border bg-secondary">
          <ButtonComponent setBars={setBars} 
                          setAlgorithmType={setAlgorithmType}
                          setOrderByAscending={setOrderByAscending}
                          sortTheData={sortTheData}
                          setAlgoSpeed={setAlgoSpeed}
                          algorithmType={algorithmType}
                          orderByType={orderByType}
                          setAlgoRunning={setAlgoRunning}
                          algoRunning={algoRunning}/>
        </div>

        <div className="col-9 border ml-1 bg-secondary">
          <GraphComponent setBarData={setBarData}
                          barData={barData}
                          barIndices={barIndices}/>
        </div>
      </div>
    </div>
  );
}