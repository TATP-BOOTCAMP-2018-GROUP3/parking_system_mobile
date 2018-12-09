import EmployeeLayout from '../../layouts/EmployeeLayout'
import { connect } from "react-redux";

const mapStateToProps = state => ({
    selectedTab: state.EmployeeReducer.selectedTab
})

const mapDispatchToProps = dispatch => ({
  updateSelectedTab: tab => {
    dispatch({
      type: "UPDATE_SELECTED_TAB",
      payload: tab
    });
  },
  refreshPendingOrders: pendingOrders => {
    dispatch({
      type: "REFRESH_PENDING_ORDERS",
      payload: pendingOrders
    });
  },
  refreshInProgressParkingOrder: inProgressOrders => {
    dispatch({
      type: "REFRESH_IN_PROGRESS_PARKING_ORDERS",
      payload: inProgressOrders
    });
  }
});

connect(mapStateToProps, mapDispatchToProps)(EmployeeLayout)

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLayout)