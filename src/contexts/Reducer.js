const Reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DONATION':
      return {
        ...state,
        currentAmount: state.currentAmount + action.payload,
        donationMade: true,
      };
    case 'CLOSE_NOTIFICATION':
      return {
        ...state,
        donationMade: false,
      };
    case 'SET_ERRORMADE':
      return {
        ...state,
        errorMade: true,
      };
    case 'CLEAR_ERRORMADE':
      return {
        ...state,
        error: false,
      };
    default:
      return state;
  }
};

export default Reducer;
