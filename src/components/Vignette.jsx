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
  }

  unhide(event) {
    const currentScrollSpeed = Math.abs(event.deltaY / 500);

    if (currentScrollSpeed > this.state.fastestScroll) {
      this.setState({ fastestScroll: currentScrollSpeed });

      setInterval(function(currentScrollSpeed) {
        console.log('tick');
        if (currentScrollSpeed > 0) {
          const decreaseByInterval = currentScrollSpeed / 6;
          this.hiddenMessage.current.style.opacity =
            currentScrollSpeed - decreaseByInterval;
        }
      }, 1000);
    }
    // if (event.deltaY > this.state.fastestScroll) {
    //   this.setState({ fastestScroll: event.deltaY });

    //   let unhideMessageInterval = setInterval(() => {
    //     if (this.hiddenMessage.current.style.opacity > 0) {
    //       this.hiddenMessage.current.style.opacity =
    //         opacityToReveal - revealPoints;
    //     } else {
    //       this.setState({ fastestScroll: 0 });
    //       clearInterval(unhideMessageInterval);
    //     }
    //   }, 50);
    // }
  }

  render() {
    return (
      <div onWheel={event => this.unhide(event)} style={this.style}>
        <div ref={this.hiddenMessage} style={{ opacity: 0 }}>
          Hi there
        </div>
        <div />
      </div>
    );
  }
}
export default Vignette;
