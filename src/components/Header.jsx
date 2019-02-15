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

  render() {
    return (
      <div style={STYLES.header} className="header">
        <ul style={STYLES.headings} className="headings">
          {this.sectionHeadings.map((section, i) => (
            <li
              key={i}
              style={{
                ...STYLES.section,
                ...STYLES.sectionActive,
                ...STYLES.sectionHover
              }}
              className="section"
            >
              <Link style={STYLES.sectionATag} to={section.path}>
                {section.heading}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Header;
