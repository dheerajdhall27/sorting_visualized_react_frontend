import React from "react";
import BarComponent from "./BarComponent";


class GraphComponent extends React.Component{


  render() {
    console.log()
    return(
        <div className="row">
          {
            this.props.numberData && this.props.numberData.map((data,index, arr) =>
                <BarComponent key={index}
                              data={data}
                              length={arr.length}
                              index={index}/>
            )
          }
        </div>
    );
  }
}

export default GraphComponent;
