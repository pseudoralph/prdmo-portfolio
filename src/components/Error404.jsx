import React from 'react';
import PropTypes from 'prop-types';

function Error404(props) {
  return (
    <div>
      <h1>Error 404</h1>
      <p>Path not found: {props.location.pathname}</p>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
