import React from 'react';
import PropTypes from 'prop-types';

class Error404 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Error 404</h1>
        <p>Path not found: {this.props.location.pathname}</p>
      </div>
    );
  }
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
