import React from 'react';
import { STYLES } from './styles';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.sectionHeadings = ['About', 'Projects', 'Blog', 'Contact'];
  }
  render() {
    return (
      <div style={STYLES.header}>
        <ul style={STYLES.headings}>
          {this.sectionHeadings.map((section, i) => (
            <li key={i} style={STYLES.section}>
              {section}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Header;
