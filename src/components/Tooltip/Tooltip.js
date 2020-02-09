import React, { useContext } from 'react';
import './Tooltip.css';
import { DonationContext } from '../../contexts/Store';

const Tooltip = () => {
  const [state] = useContext(DonationContext);
  const goalPercentage = Math.round(
    (state.currentAmount * 100) / state.totalAmount
  );
  return (
    <div className='tooltip'>
      <strong id='fundraise_remainingText'>{goalPercentage}%</strong> of the
      goal funded
    </div>
  );
};

export default Tooltip;
