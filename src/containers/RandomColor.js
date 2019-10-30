import React, { Component } from 'react';
import ColorDisplay from '../components/colors/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    background: 'black'
  };

  selectColor = background => {
    this.setState((prevState) => (prevState.background === background) ? { background: ' center / contain url(\'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg\')' } : { background });
  }

  componentDidMount() {
    this.secondTimer = setInterval(
      this.randomColor,
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.secondTimer);
  }

  randomColor = () => {
    const colors = ['red', 'green', 'black', 'yellow'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.selectColor(color);
  }

  render() {
    const { background } = this.state;

    return (
      <>
        <ColorDisplay background={background} />
      </>
    );
  }
}
