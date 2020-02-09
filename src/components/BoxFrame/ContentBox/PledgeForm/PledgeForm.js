import React, { useState, useContext } from 'react';
import { DonationContext } from '../../../../contexts/Store';
import './PledgeForm.css';

const PledgeForm = () => {
  const [state, dispatch] = useContext(DonationContext);
  const [formValue, setFormValue] = useState('');

  const handleChange = e => {
    const inputValue = e.target.value;
    if (/^[\d]+$/.test(inputValue) && !state.errorMade && !state.donationMade) {
      setFormValue(e.target.value);
    } else {
      dispatch({ type: 'SET_ERRORMADE' });
      setFormValue('');
      document.querySelector('#fundraise_form').style.visibility = 'hidden';
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!state.errorMade && formValue) {
      dispatch({ type: 'ADD_DONATION', payload: formValue });
      setFormValue('');
      document.querySelector('#fundraise_form').style.visibility = 'hidden';
    }
  };

  return (
    <form id='fundraise_form' onSubmit={handleSubmit}>
      <input
        id='fundraise_amount'
        type='text'
        value={formValue}
        onChange={handleChange}
      />
      <input type='submit' id='fundraise_pledgeButton' value='Pledge' />
    </form>
  );
};

export default PledgeForm;
