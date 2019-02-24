import React from 'react';
import PropTypes from 'prop-types';
import { parseHTML } from './parseHTML';
import { STYLES } from './styles';
import UseInstructions from './UseInstructions';

function Main(props) {
  const { title, body } = props.content[0].content;

  return (
    <div style={STYLES.main.body}>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={parseHTML(body)} />
      <UseInstructions />
    </div>
  );
}

Main.propTypes = {
  content: PropTypes.array.isRequired
};

export default Main;
