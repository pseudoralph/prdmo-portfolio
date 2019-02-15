import React from 'react';
import PropTypes from 'prop-types';
import { STYLES } from './styles';

class Hover extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hover: false };

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState(state => {
      return { hover: state.hover ? false : true };
    });
  }

  render() {
    return (
      <div
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        style={
          this.state.hover
            ? { ...STYLES.section, ...STYLES.sectionHover }
            : { ...STYLES.section }
        }
      >
        {this.props.children}
      </div>
    );
  }
}

Hover.propTypes = {
  children: PropTypes.object
};

export default Hover;
