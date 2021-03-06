import React, { useContext } from 'react';
import './TextContent.css';
import { DonationContext } from '../../../../contexts/Store';

const TextContent = () => {
  const [state] = useContext(DonationContext);
  return (
    <div>
      <p className='textContentParagraph'>
        Only 3 days left to fund this project,{' '}
        <strong id='fundraise_currentFundingText'>
          ${state.currentAmount}
        </strong>{' '}
        has been raised towards the goal to raise{' '}
        <strong id='fundraise_goalText'>$1000</strong>.
      </p>
      <p className='textContentParagraph'>
        Pledge money by entering the sum in the field below and press pledge, we
        already know your credit card details.
      </p>
    </div>
  );
};

export default TextContent;
