import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

const initialState = {
  totalAmount: 1000,
  currentAmount: 750,
  donationMade: false,
  errorMade: false,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <DonationContext.Provider value={[state, dispatch]}>
      {children}
    </DonationContext.Provider>
  );
};

export const DonationContext = createContext(initialState);

export default Store;
