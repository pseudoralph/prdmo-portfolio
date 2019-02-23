import React from 'react';

class Vignette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fastestScroll: 0
    };
    this.hiddenMessage = React.createRef();

    this.style = {
      padding: '1em',
      background: 'rgb(128, 128, 128)',
      color: 'white',
      height: '100vh'
    };

    this.unhideTimer = null;
  }

  unhide(event) {
    let currentScrollSpeed = Math.abs(event.deltaY / 300).toFixed(4);

    if (currentScrollSpeed > this.state.fastestScroll) {
      this.setState({ fastestScroll: currentScrollSpeed });

      if (this.unhideTimer) {
        clearInterval(this.unhideTimer);
      }

      this.unhideTimer = setInterval(() => {
        let fadeUnits = currentScrollSpeed / 20;

        if (currentScrollSpeed > 0.05) {
          currentScrollSpeed -= fadeUnits;
          this.hiddenMessage.current.style.opacity = currentScrollSpeed;
        } else {
          this.hiddenMessage.current.style.opacity = 0;
          this.setState({ fastestScroll: 0 });
          clearInterval(this.unhideTimer);
        }
      }, 250);
    }
  }

  render() {
    return (
      <div onWheel={event => this.unhide(event)} style={this.style}>
        <div ref={this.hiddenMessage} style={{ opacity: 0 }}>
          <h3>There's a hidden message here</h3>
          <p>
            Some things are meant to be ephemeral. This is getting harder and
            harder to realize in our modern, digital age.
          </p>
        </div>
        <div />
      </div>
    );
  }
}
export default Vignette;
