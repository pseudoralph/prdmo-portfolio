export const STYLES = {
  main: {
    body: { padding: '1em', lineHeight: '1.5em', marginTop: '2.5em' }
  },
  instructions: {
    border: '1px solid black',
    display: 'table',
    margin: '1.5em auto',
    textAlign: 'center',
    padding: '.8em 1em',
    borderRadius: '5px'
  },
  header: {
    header: {
      zIndex: '999',
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      width: '100vw',
      backgroundColor: 'rgb(78, 78, 78)',
      padding: '1.3em 0 1em'
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
