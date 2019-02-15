import React from 'react';
import { STYLES } from './styles';
import { Link } from 'react-router-dom';
import Hover from './Hover';

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

  render() {
    return (
      <div style={STYLES.header} className="header">
        <ul style={STYLES.headings} className="headings">
          {this.sectionHeadings.map((section, i) => (
            <Link style={STYLES.sectionLink} to={section.path} key={i}>
              <li style={STYLES.section}>
                <Hover>{section.heading}</Hover>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Header;
