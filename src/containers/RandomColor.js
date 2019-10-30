import React, { Component } from 'react';
import ColorDisplay from '../components/colors/ColorDisplay';
import ColorPicker from '../components/colors/ColorPicker';

export default class RandomColor extends Component {
  state = {
    backgroundColor: 'black'
  };

  selectColor = backgroundColor => {
    this.setState({ backgroundColor });
  }
  componentDidMount() {
    console.log('I am mounted');
  }

  componentDidUpdate() {
    console.log('I am updated');
  }

  componentWillUnmount() {
    console.log('i am unmounted');
  }
  render() {
    const { backgroundColor } = this.state;
    const colors = ['red', 'green', 'black', 'yellow'];

    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} />
        <ColorPicker
          selectColor={this.selectColor}
          colors={colors} />
      </>
    );
  }
}
