import React from 'react'

class BarComponent extends React.Component{

  render() {
    const barStyle = {
      backgroundColor: "lightblue",
      width: (window.innerWidth / (this.props.length + 5)),
      height: this.props.data  * 3,
      transform: "rotateZ(180deg) translate(0px, -600px)",
      transformOrigin: "top left",
      border: "1px solid black",
    };

    return(
        <div key={this.props.index}
             style={barStyle}>
        </div>
    )
  }
}

export default BarComponent;
