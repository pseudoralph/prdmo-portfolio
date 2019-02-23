export const STYLES = {
  main: {
    body: { padding: '1em', lineHeight: '1.5em' }
  },
  header: {
    header: {
      boxSizing: 'border-box',
      position: 'sticky',
      width: '100vw',
      backgroundColor: 'rgb(78, 78, 78)',
      padding: '1.3em 0 1em'
      // marginBottom: '1em'
    },
    headings: {
      display: 'table',
      margin: '0 auto',
      padding: 0,
      listStyleType: 'none'
    },
    sectionLink: {
      color: 'white',
      textDecoration: 'none'
    },
    section: {
      display: 'inline',
      margin: '.33em'
    }
  },
  hover: {
    noHover: {
      cursor: 'pointer',
      display: 'inherit',
      padding: '.8em 2em'
    },
    withHover: {
      background: 'rgb(86, 86, 86)'
    }
  },
  vignette: {
    main: {
      padding: '1em',
      background: 'rgb(128, 128, 128)',
      color: 'white',
      height: '100vh'
    }
  },
  sectionActive: {
    borderBottom: '2px solid black'
  }
};
