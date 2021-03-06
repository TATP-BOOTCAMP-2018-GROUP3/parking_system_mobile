import MyParkingOrderPage from '../../components/MyParkingOrderPage.js'
import { connect } from "react-redux";

const mapStateToProps = state => ({
  employeeId: state.LoginReducer.employeeId,
  selectedTab: state.EmployeeReducer.selectedTab,
  inProgressOrders: state.EmployeeReducer.inProgressOrders,
  popupMsg: state.EmployeeReducer.popupMsg,
  employeeId: state.EmployeeReducer.employeeId
})

const mapDispatchToProps = dispatch => ({
  updateSelectedTab: tab => {
    dispatch({
      type: "UPDATE_SELECTED_TAB",
      payload: tab
    });
  },
  refreshInProgressParkingOrder: data => {
    dispatch({
      type: "REFRESH_IN_PROGRESS_PARKING_ORDERS",
      payload: data
    });
  },
  handleSelectedOrder: order => {
    dispatch({
      type: "UPDATE_HANDLING_ORDER",
      payload: order
    });
  },
  handleUpdatePopupMsg: msg => {
    dispatch({
      type: "UPDATE_POPUP_MSG",
      payload: msg
    });
  },
  refreshEmployeeId: id => {
    dispatch({
      type: "REFRES_EMPLOYEE_ID",
      payload: id
    });
  },
});

connect(mapStateToProps, mapDispatchToProps)(MyParkingOrderPage)

export default connect(mapStateToProps, mapDispatchToProps)(MyParkingOrderPage)