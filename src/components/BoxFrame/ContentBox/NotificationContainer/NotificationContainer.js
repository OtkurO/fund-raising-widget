import React from 'react';
import './NotificationContainer.css';

const NotificationContainer = () => {
  const handleButtonClick = () => {};
  return (
    <div className='notification notification-success'>
      Thank you for your pledge!
      <button className='button-link' onClick={handleButtonClick}>
        Close
      </button>
    </div>
  );
};

export default NotificationContainer;
