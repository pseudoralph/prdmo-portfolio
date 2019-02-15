import React from 'react';
import PropTypes from 'prop-types';

class Hover extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return <div style={{ display: 'inline' }}>{this.props.children}</div>;
  }
}

Hover.propTypes = {
  children: PropTypes.object
};

export default Hover;
