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
            <Hover key={i}>
              <li style={{ ...STYLES.section }} className="section">
                <Link style={STYLES.sectionATag} to={section.path}>
                  {section.heading}
                </Link>
              </li>
            </Hover>
          ))}
        </ul>
      </div>
    );
  }
}

export default Header;
