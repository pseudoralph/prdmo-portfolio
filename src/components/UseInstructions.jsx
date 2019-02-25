import React from 'react';
import mobile from './assets/img/gesture-swipe-horizontal.svg';
import desktop from './assets/img/gesture-swipe-vertical.svg';
import { STYLES } from './styles';

function userAgent() {
  const platform = /(intel)/gi.test(navigator.userAgent)
    ? { device: 'Desktop', message: 'Scroll up/down', image: desktop }
    : { device: 'Mobile', message: 'Swipe left/right', image: mobile };

  return platform;
}

function UseInstructions() {
  return (
    <div style={STYLES.instructions}>
      <h3> {userAgent().device} users:</h3>
      <img src={userAgent().image} style={{ width: '5em' }} />

      <p> {userAgent().message} to reveal message </p>
    </div>
  );
}

export default UseInstructions;
