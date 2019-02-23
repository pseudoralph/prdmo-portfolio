import React from 'react';
import PropTypes from 'prop-types';
import VignetteEffect from './VignetteEffect';
// import { STYLES } from './styles';

function Vignette(props) {
  const { title, body } = props.content[0].content;

  return (
    <div>
      <VignetteEffect post={{ title, body }} />
    </div>
  );
}

Vignette.propTypes = {
  content: PropTypes.array
};

export default Vignette;
