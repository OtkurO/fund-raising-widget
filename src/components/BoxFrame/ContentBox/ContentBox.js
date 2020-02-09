import React from 'react';
import TextContent from './TextContent/TextContent';
import PledgeForm from './PledgeForm/PledgeForm';
import NotificationContainer from './NotificationContainer/NotificationContainer';
import './ContentBox.css';

const ContentBox = () => {
  return (
    <div className='boxFrame_content'>
      <TextContent />
      <PledgeForm />
      <NotificationContainer />
    </div>
  );
};

export default ContentBox;
