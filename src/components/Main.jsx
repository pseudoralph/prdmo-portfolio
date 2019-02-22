import React from 'react';
import PropTypes from 'prop-types';
import { parseHTML } from './parseHTML';

function Main(props) {
  const { title, body } = props.content[0].content;

  return (
    <div>
      <h3>{title}</h3>
      <div
        dangerouslySetInnerHTML={parseHTML(body)}
        style={{ padding: '1em', lineHeight: '1.5em' }}
      />
    </div>
  );
}

Main.propTypes = {
  content: PropTypes.array.isRequired
};

export default Main;
