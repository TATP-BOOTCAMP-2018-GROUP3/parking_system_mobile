const initialState = { 
  pendingOrders: [],
  inProgressOrders: []
};
  
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "REFRESH_PENDING_ORDERS":
      return {
              ...state,
              pendingOrders: payload
              };
    case "REFRESH_IN_PROGRESS_PARKING_ORDERS":
      return {
              ...state,
              inProgressOrders: payload
              };
    default:
      return state;
  }
};