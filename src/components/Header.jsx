import React from 'react';
import { STYLES } from './styles';
import { Link } from 'react-router-dom';
import Hover from './Hover';
// import Active from './Active';

function Header() {
  const sectionHeadings = [
    { heading: 'About', path: '/' },
    { heading: 'Vignette', path: '/vignette' }
  ];

  return (
    <div style={STYLES.header.header} className="header">
      <ul style={STYLES.header.headings} className="headings">
        {sectionHeadings.map((section, i) => (
          <Link style={STYLES.header.sectionLink} to={section.path} key={i}>
            <li style={STYLES.header.section} id={section.path}>
              <Hover>{section.heading}</Hover>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Header;
