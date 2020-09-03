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
  const [algorithmType, setAlgorithmType] = useState(0);
  const [orderByAscending, setOrderByAscending] = useState(true);

  let arrData = [];

  const createRandomBars = () => {
    return [...Array(totalBars)].map(() => Math.floor(Math.random() * (MAX_BAR_HEIGHT - MIN_BAR_HEIGHT) + MIN_BAR_HEIGHT))
  }

  const [barData, setBarData] = useState(createRandomBars());

  const swap = function(arr, indexA, indexB) {
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
  }

  const setValue = function(ogArr) {
    console.log(ogArr);
    setBarData([...ogArr]);
  }

  const animateTheData = (arr, ogArr) => {
      for(let i = 0;i < arr.length; i++) {
        (function(i){
          setTimeout(function () {
            swap(ogArr, arr[i][0], arr[i][1]);
            setValue(ogArr)
          }, 1000 * (i + 1))
        })(i);
      }
  }

  const sortTheData = (algorithmType, orderByAscending) => {
    let algorithmFactory = new AlgorithmFactory(algorithmType, barData, orderByAscending);
    let algorithm = algorithmFactory.createAlgorithm(algorithmType);

    let arrToAnimate = algorithm.sort([...barData], orderByAscending); 
    animateTheData(arrToAnimate, [...barData]);
  }

  useEffect(() => {
    setBarData(createRandomBars())

  },[totalBars])

  return (
    <div className="ml-5">
      <ButtonComponent setBars={setBars} 
                       setAlgorithmType={setAlgorithmType}
                       setOrderByAscending={setOrderByAscending}
                       sortTheData={sortTheData}/>

      <GraphComponent setBarData={setBarData}
                      barData={barData}/>
    </div>
  );
}