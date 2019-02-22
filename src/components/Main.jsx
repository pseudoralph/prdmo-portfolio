import React from 'react';
import PropTypes from 'prop-types';

function Main(props) {
  const { title, body } = props.content[0].content;

  return (
    <div>
      <h3>{title}</h3>
      {body}
    </div>
  );
}

Main.propTypes = {
  content: PropTypes.array.isRequired
};

export default Main;
