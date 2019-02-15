import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.styles = {
      block: {
        width: '100vw',
        backgroundColor: '#e8e8e8',
        height: '100px'
      }
    };
  }
  render() {
    return <div style={this.styles.block}>Header works</div>;
  }
}

export default Header;
