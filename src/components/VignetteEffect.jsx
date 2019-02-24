import React from 'react';
import PropTypes from 'prop-types';
import { parseHTML } from './parseHTML';
import { STYLES } from './styles';
import Hammer from 'hammerjs';

class VignetteEffect extends React.Component {
  constructor(props) {
    super(props);

    this.hiddenMessage = React.createRef();
    this.mobileTouchAware = React.createRef();
    this.unhidden = 0;
    this.activeUnhide = null;
  }

  componentWillUnmount() {
    clearInterval(this.activeUnhide);
    this.hiddenMessage.current.style.opacity = 0;
  }

  componentDidMount() {
    const mobileSwipe = new Hammer(this.mobileTouchAware.current);
    mobileSwipe.on('swipe', event => {
      this.unhide(event.deltaX);
    });
  }

  unhide(event) {
    const swipeFactor = 300;
    const revealThreshold = 15;

    if (Math.abs(event) > this.unhidden + revealThreshold) {
      clearInterval(this.activeUnhide);

      this.unhidden = Math.abs(event);

      this.activeUnhide = setInterval(() => {
        if (this.unhidden > revealThreshold) {
          this.unhidden -= this.unhidden / revealThreshold;

          this.hiddenMessage.current.style.opacity = (
            this.unhidden / swipeFactor
          ).toFixed(3);
        } else {
          clearInterval(this.activeUnhide);
          this.hiddenMessage.current.style.opacity = 0;
        }
      }, 75);
    }
  }

  render() {
    return (
      <div
        style={STYLES.vignette.main}
        ref={this.mobileTouchAware}
        onWheel={event => this.unhide(event.deltaY)}
      >
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
