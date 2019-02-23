import React from 'react';
import PropTypes from 'prop-types';
import { STYLES } from './styles';

class Vignette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fastestScroll: 0
    };
    this.hiddenMessage = React.createRef();
    this.activeUnhide = null;
  }

  unhide(event) {
    let currentScrollSpeed = Math.abs(event.deltaY / 400).toFixed(3);

    if (currentScrollSpeed > this.state.fastestScroll) {
      this.setState({ fastestScroll: currentScrollSpeed });

      if (this.activeUnhide) {
        clearInterval(this.activeUnhide);
      }

      this.activeUnhide = setInterval(() => {
        let fadeUnits = currentScrollSpeed / 20;

        if (currentScrollSpeed > 0.025) {
          currentScrollSpeed = Number.parseFloat(
            currentScrollSpeed - fadeUnits
          ).toFixed(3);

          this.hiddenMessage.current.style.opacity = currentScrollSpeed;
        } else {
          this.hiddenMessage.current.style.opacity = 0;
          this.setState({ fastestScroll: 0 });
          clearInterval(this.activeUnhide);
        }
      }, 125);
    }
  }

  render() {
    return (
      <div onWheel={event => this.unhide(event)} style={STYLES.vignette.main}>
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
