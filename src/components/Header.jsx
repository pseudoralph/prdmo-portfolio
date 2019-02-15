import React from 'react';
import { STYLES } from './styles';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.sectionHeadings = [
      { heading: 'Home', path: '/' },
      { heading: 'Projects', path: '/projects' },
      { heading: 'Blog', path: '/blog' },
      { heading: 'Contact', path: '/contact' }
    ];
  }

  hover(obj) {
    console.log('mouse!', obj);
  }
  render() {
    return (
      <div style={STYLES.header}>
        <ul style={STYLES.headings}>
          {this.sectionHeadings.map((section, i) => (
            <li
              id={i}
              key={i}
              style={{ ...STYLES.section, ...STYLES.sectionActive }}
              onMouseEnter={() => this.hover(event.type)}
              onMouseLeave={() => this.hover(event.target)}
            >
              <Link to={section.path}>{section.heading}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Header;
