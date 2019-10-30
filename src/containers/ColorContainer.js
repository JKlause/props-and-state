import React, { Component } from 'react';
import ColorDisplay from '../components/colors/ColorDisplay';
import ColorPicker from '../components/colors/ColorPicker';



export default class ColorContainer extends Component {
  state = {
    background: 'black'
  };

  selectColor = background => {
    this.setState({ background });
  }

  render() {
    const { background } = this.state;
    const colors = ['red', 'green', 'black', 'yellow'];

    return (
      <>
        <ColorDisplay background={background} />
        <ColorPicker
          selectColor={this.selectColor}
          colors={colors} />
      </>
    );
  }
  
}
