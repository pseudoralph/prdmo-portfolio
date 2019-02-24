import React from 'react';
import PropTypes from 'prop-types';
import VignetteEffect from './VignetteEffect';

function Vignette(props) {
  const { title, body } = props.content[0].content;

  return (
    <div
      className="vignette-outter-wrapper"
      style={{ position: 'fixed', width: '100vw', marginTop: '2.5em' }}
    >
      <VignetteEffect post={{ title, body }} />
    </div>
  );
}

Vignette.propTypes = {
  content: PropTypes.array
};

export default Vignette;
