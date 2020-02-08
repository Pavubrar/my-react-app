import React, { Component } from 'react';

class CityPoint extends Component {
 
  coordinateConverter = (y, x) => {
    const lat = 275 - (y - 54.5) * 50;
    const long = 165 + (x + 115) * 33;
    return [lat, long];
  }

  render() {
    const [lat, long] = this.coordinateConverter(this.props.city.latitude, this.props.city.longitude);
    return (
      <>
      <circle
        className={this.props.classNames}
        keyid={this.props.keyID}
        cx={long}
        cy={lat}
        r="7"
        stroke="black"
        strokeWidth="1"
        fill="orange" 
        style ={this.props.style} 
        onClick={this.props.onClick}/>

      <text x={long + 10} y={lat - 10}>{this.props.city.name}</text>
      </>
    );
  }
}

export default CityPoint;