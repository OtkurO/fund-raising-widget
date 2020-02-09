import React, { useContext } from 'react';
import { DonationContext } from '../../../contexts/Store';
import './ProgressBar.css';

const ProgressBar = () => {
  const [state] = useContext(DonationContext);
  const goalPercentage = (state.currentAmount * 100) / state.totalAmount;
  const bgColor = goalPercentage < 100 ? '#ef5f3c' : '#1CBC2C';
  const bgWidth = goalPercentage < 100 ? `${goalPercentage}%` : '100%';

  return (
    <div className='progressBar_container'>
      <div
        className='progressBar_bar inProgress'
        id='fundraise_progressBar'
        style={{ backgroundColor: bgColor, width: bgWidth }}
      ></div>
    </div>
  );
};

export default ProgressBar;
