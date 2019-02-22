import React from 'react';

class Vignette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollCount: 0
    };
    this.hiddenMessage = React.createRef();

    this.style = { padding: '1em', background: 'grey', height: '100vh' };
  }

  unhide(event) {
    // const deltaSpeed = setInterval(()=> )
    const delatRGB = event.deltaY;

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
