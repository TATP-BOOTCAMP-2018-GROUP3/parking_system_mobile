const initialState = { 
  pendingOrders: []
};
  
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "REFRESH_PENDING_ORDERS":
      return {
              ...state,
              pendingOrders: payload
              };
    default:
      return state;
  }
};