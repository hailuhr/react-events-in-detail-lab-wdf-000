import React from 'react';



class CoordinatesButton extends React.Component {

  constructor(){
    super();

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    var array = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(array)
  }


  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }

}

module.exports = CoordinatesButton
