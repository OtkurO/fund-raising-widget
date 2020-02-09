const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DONATION':
      return {
        ...state,
        currentAmount: state.currentAmount + Number(action.payload),
        donationMade: true,
      };
    case 'CLOSE_NOTIFICATION':
      return {
        ...state,
        donationMade: false,
        error: false,
      };
    case 'SET_ERRORMADE':
      return {
        ...state,
        errorMade: true,
      };
    default:
      return state;
  }
};

export default Reducer;
