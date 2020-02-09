import React from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import ContentBox from './ContentBox/ContentBox';
import './BoxFrame.css';

const BoxFrame = () => {
  return (
    <div className='boxFrame'>
      <ProgressBar />
      <ContentBox />
    </div>
  );
};

export default BoxFrame;
