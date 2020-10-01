import React, {useState, useEffect} from 'react';
import ButtonComponent from "../components/button_component/ButtonComponent";
import GraphComponent from "../components/graph_component/GraphComponent";
import {MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, TOTAL_BARS} from "../constants/Constants";
import { AlgorithmFactory } from "../sorting_algorithms/AlgorithmFactory"

/**
 * This Component is the main component which holds the state for the
 * 1. Bars
 * 2. Algorithm Type
 * 3. The order of Sorting
 */
export function SortingComponent() {
  const [totalBars, setBars] = useState(TOTAL_BARS);
  const [barIndices, setBarIndex] = useState([]);
  const [algorithmType, setAlgorithmType] = useState("SELECTION_SORT");
  const [orderByAscending, setOrderByAscending] = useState(true);
  const [algoSpeed, setAlgoSpeed] = useState(10);

  const createRandomBars = () => {
    return [...Array(totalBars)].map(() => Math.floor(Math.random() * (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT) + MIN_BAR_HEIGHT))
  }

  const [barData, setBarData] = useState(createRandomBars());

  const sortTheData = () => {
    let algorithmFactory = new AlgorithmFactory(algorithmType, barData, orderByAscending);
    let algorithm = algorithmFactory.createAlgorithm(algorithmType);

    algorithm.sort([...barData], orderByAscending, algoSpeed); 
  }

  useEffect(() => {
    setBarData(createRandomBars())

  },[totalBars])

  return (
    <div className="ml-5">
      <ButtonComponent setBars={setBars} 
                       setAlgorithmType={setAlgorithmType}
                       setOrderByAscending={setOrderByAscending}
                       sortTheData={sortTheData}
                       setAlgoSpeed={setAlgoSpeed}/>

      <GraphComponent setBarData={setBarData}
                      barData={barData}
                      barIndices={barIndices}/>
    </div>
  );
}