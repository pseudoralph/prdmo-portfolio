import React from 'react';
import PropTypes from 'prop-types';
import { parseHTML } from './parseHTML';
import { STYLES } from './styles';

class VignetteEffect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fastestScroll: 0
    };
    this.hiddenMessage = React.createRef();
    this.activeUnhide = null;
  }

  unhide(event) {
    let currentScrollSpeed =
      Math.abs(event.deltaY / 350).toFixed(3) > 1
        ? 1
        : Math.abs(event.deltaY / 350).toFixed(3);

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
          <h3>{this.props.post.title}</h3>
          <div dangerouslySetInnerHTML={parseHTML(this.props.post.body)} />
        </div>
        <div />
      </div>
    );
  }
}

VignetteEffect.propTypes = {
  post: PropTypes.object
};
export default VignetteEffect;
