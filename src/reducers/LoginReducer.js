const initialState = {
    employeeId: ''
  };
  
  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "REFRESH_EMPLOYEE_ID":
        return {
          ...state,
          employeeId: payload
        }
      default:
        return state;
    }
  };