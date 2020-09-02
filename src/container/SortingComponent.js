import React, {useState, useEffect} from 'react';
import ButtonComponent from "../components/button_component/ButtonComponent";
import GraphComponent from "../components/graph_component/GraphComponent";
import {MIN_BAR_HEIGHT, MAX_BAR_HEIGHT, TOTAL_BARS} from "../constants/Constants";

/**
 * This Component is the main component which holds the state for the
 * 1. Bars
 * 2. Algorithm Type
 * 3. The order of Sorting
 */
export function SortingComponent() {
  const [totalBars, setBars] = useState(TOTAL_BARS);
  const [algorithmType, setAlgorithmType] = useState(0);
  const [orderByAscending, setOrderByAscending] = useState(true);

  const createRandomBars = () => {
    return [...Array(totalBars)].map(() => Math.floor(Math.random() * (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT) + MIN_BAR_HEIGHT))
  }

  const [barData, setBarData] = useState(createRandomBars());

  useEffect(() => {
    setBarData(createRandomBars())

  },[totalBars])

  return (
    <div className="ml-5">
      <ButtonComponent setBars={setBars} 
                       setAlgorithmType={setAlgorithmType}
                       setOrderByAscending={setOrderByAscending}
                       />

      <GraphComponent setBarData={setBarData}
                      barData={barData}/>
    </div>
  );
}