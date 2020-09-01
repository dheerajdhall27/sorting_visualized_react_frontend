import React, {useState, useEffect} from 'react';
import ButtonComponent from "../components/button_component/ButtonComponent";
import GraphComponent from "../components/graph_component/GraphComponent";
import {sortTheData} from "../services/SortingService";


export function SortingComponent() {
  const [totalBars, setBars] = useState(100);
  const [algorithmType, setAlgorithmType] = useState(0);
  const [orderByAscending, setOrderByAscending] = useState(true);
  const [barData, setBarData] = useState([...Array(totalBars)].map(() => Math.floor(Math.random() * 100)))

  useEffect(() => {
    setBarData([...Array(totalBars)].map(() => Math.floor(Math.random() * 100)))

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