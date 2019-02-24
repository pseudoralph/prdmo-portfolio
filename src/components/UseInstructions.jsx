import React from 'react';
import mobile from './assets/img/gesture-swipe-horizontal.svg';
import desktop from './assets/img/gesture-swipe-vertical.svg';

function userAgent() {
  const platform = /(intel)/gi.test(navigator.userAgent)
    ? { device: 'Desktop', message: 'Scroll up/down' }
    : { device: 'Mobile', message: 'Swipe left/right' };

  return platform;
}

function UseInstructions() {
  return (
    <div
      style={{
        border: '1px solid black',
        display: 'table',
        margin: '1.5em auto',
        textAlign: 'center',
        padding: '.8em 1em',
        borderRadius: '5px'
      }}
    >
      <h3> {userAgent().device} users:</h3>
      <img
        src={userAgent().device === 'Desktop' ? desktop : mobile}
        style={{ width: '5em' }}
      />

      <p> {userAgent().message} to reveal message </p>
    </div>
  );
}

export default UseInstructions;
