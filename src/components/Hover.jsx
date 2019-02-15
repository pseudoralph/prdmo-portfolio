import React from 'react';
import PropTypes from 'prop-types';

class Hover extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };
  }

  toggleHover = () => {
    this.setState(state => {
      return { hover: state.hover ? false : true };
    });
    console.log(this.state.hover);
    // console.log(this.state);
  };

  render() {
    return (
      <div
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        style={{ display: 'inline' }}
      >
        {this.state.hover ? '>' : ''}
        {this.props.children}
      </div>
    );
  }
}

Hover.propTypes = {
  children: PropTypes.object
};

export default Hover;
