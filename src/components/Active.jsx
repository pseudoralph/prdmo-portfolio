import React from 'react';
import PropTypes from 'prop-types';

class Active extends React.Component {
  constructor(props) {
    super(props);
  }

  isActive() {
    const presentURL = window.location.hash.replace(/\W/g, '');
    return presentURL == this.props.children.toLocaleLowerCase();
  }

  render() {
    console.log(this.isActive());
    return (
      <div>
        {this.isActive ? '*' : ''}
        {this.props.children}
      </div>
    );
  }
}

Active.propTypes = {
  children: PropTypes.string
};

export default Active;
