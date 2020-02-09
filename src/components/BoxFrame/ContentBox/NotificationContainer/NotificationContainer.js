import React, { useContext } from 'react';
import { DonationContext } from '../../../../contexts/Store';
import './NotificationContainer.css';

const NotificationContainer = () => {
  const [state, dispatch] = useContext(DonationContext);
  const handleButtonClick = event => {
    dispatch({ type: 'CLOSE_NOTIFICATION' });
    document.querySelector('#fundraise_form').style.visibility = 'visible';
  };

  const classNameToSet = state.errorMade
    ? 'notification notification-error'
    : state.donationMade
    ? 'notification notification-success'
    : 'notification notification-normal';
  const textToShow = state.errorMade
    ? 'Please enter an integer number. '
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
