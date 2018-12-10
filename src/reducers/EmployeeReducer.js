const initialState = {
  selectedTab: "",
  pendingOrders: [],
  inProgressOrders: [],
  handlingOrder: {},
  popupMsg: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "UPDATE_SELECTED_TAB":
      return {
        ...state,
        selectedTab: payload
      }
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
    case "UPDATE_HANDLING_ORDER":
      return {
        ...state,
        handlingOrder: payload
      }
    case "UPDATE_POPUP_MSG":
      return {
        ...state,
        popupMsg: payload
      }
    default:
      return state;
  }
};