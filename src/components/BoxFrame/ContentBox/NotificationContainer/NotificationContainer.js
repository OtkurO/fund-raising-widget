import React, { useContext } from 'react';
import { DonationContext } from '../../../../contexts/Store';
import './NotificationContainer.css';

const NotificationContainer = () => {
  const handleButtonClick = event => {
    dispatch({ type: 'CLOSE_NOTIFICATION' });
  };
  const [state, dispatch] = useContext(DonationContext);

  const classNameToSet = state.errorMade
    ? 'notification notification-error'
    : state.donationMade
    ? 'notification notification-success'
    : 'notification notification-normal';
  const textToShow = state.errorMade
    ? 'Please input a valid number. '
    : state.donationMade
    ? 'Thank you for your pledge!'
    : '';
  return (
    <div className={classNameToSet}>
      {textToShow}
      <button className='button-link' onClick={handleButtonClick}>
        Close
      </button>
    </div>
  );
};

export default NotificationContainer;
