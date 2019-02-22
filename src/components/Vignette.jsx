import React from 'react';

class Vignette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fastestScroll: 0,
      hideBack: 0
    };
    this.hiddenMessage = React.createRef();

    this.style = {
      padding: '1em',
      background: 'rgb(128, 128, 128',
      color: 'rgb(128, 128, 128',

      height: '100vh'
    };
  }

  unhide(event) {
    const delatRGB =
      128 + Math.abs(event.deltaY) < 255 ? 128 + Math.abs(event.deltaY) : 255;

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
