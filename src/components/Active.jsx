import React from 'react';
import PropTypes from 'prop-types';

function Active(props) {
  const isActive = () => {
    const presentURL = window.location.hash.replace(/\W/g, '');
    return presentURL == props.children.toLocaleLowerCase();
  };
  return (
    <div>
      {isActive() ? '*' : ''}
      {props.children}
    </div>
  );
}

Active.propTypes = {
  children: PropTypes.string
};

export default Active;
