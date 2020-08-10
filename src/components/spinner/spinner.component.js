import React from 'react';
import { SpinnerStyle } from './spinner.style';

const Spinner = ({ color = '#fff', borderWidth = '5px', size = '44px' }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        width: '100%',
        height: '85%',
      }}
      data-testid="spinner"
    >
      <SpinnerStyle color={color} borderWidth={borderWidth} size={size}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </SpinnerStyle>
    </div>
  );
};

export default Spinner;
