import React from 'react';

function Vignette() {
  return (
    <div
      onScroll={() => console.log('scrolling...')}
      style={{ padding: '1em', background: 'grey', height: '100vh' }}
    >
      Hi there
      <div />
    </div>
  );
}
export default Vignette;
