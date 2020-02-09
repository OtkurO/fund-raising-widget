import React from 'react';
import './PledgeForm.css';

const PledgeForm = () => {
  return (
    <form id='fundraise_form'>
      <input id='fundraise_amount' type='text' />
      <input type='submit' id='fundraise_pledgeButton' value='Pledge' />
    </form>
  );
};

export default PledgeForm;
