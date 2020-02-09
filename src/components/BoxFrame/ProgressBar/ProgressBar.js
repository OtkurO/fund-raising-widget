import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  return (
    <div className='progressBar_container'>
      <div
        className='progressBar_bar inProgress'
        id='fundraise_progressBar'
      ></div>
    </div>
  );
};

export default ProgressBar;
