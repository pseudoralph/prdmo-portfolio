import React from 'react';

class Vignette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fastestScroll: 0,
      fadeBackIn: 0,
      rgbStartState: 128
    };
    this.hiddenMessage = React.createRef();

    this.style = {
      padding: '1em',
      background: 'rgb(128, 128, 128)',
      color: `rgb(${this.state.rgbStartState}, ${this.state.rgbStartState}, ${
        this.state.rgbStartState
      })`,
      height: '100vh'
    };
  }

  slowFade() {
    let start = 255;
    let stop = 128;
    // this.state.rgbStartState;

    return () => {
      let fader = setInterval(() => {
        if (start > stop) {
          return start--;
        } else {
          // this.setState({ fastestScroll: 0 });
          clearInterval(fader);
        }
      }, 50);
    };
  }

  unhide(event) {
    const delatRGB =
      127 + Math.abs(event.deltaY / 4) < 255
        ? 127 + Math.abs(event.deltaY / 4)
        : 255;

    if (delatRGB > this.state.fastestScroll) {
      this.setState({ fastestScroll: delatRGB });
    }

    this.hiddenMessage.current.style.color = `rgb(${delatRGB},${delatRGB},${delatRGB})`;
  }

  render() {
    return (
      <div onWheel={event => this.unhide(event)} style={this.style}>
        <div ref={this.hiddenMessage}>Hi there</div>
        <div />
      </div>
    );
  }
}
export default Vignette;
