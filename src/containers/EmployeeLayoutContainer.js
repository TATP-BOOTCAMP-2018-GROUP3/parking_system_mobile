import EmployeeLayout from '../layouts/EmployeeLayout.js'
import { connect } from "react-redux";

const mapStateToProps = state => ({
    pendingOrders: state.EmployeeReducer.pendingOrders
})

const mapDispatchToProps = dispatch => ({
  refreshPendingOrders: data => {
    dispatch({
      type: "REFRESH_PENDING_ORDERS",
      payload: data
    });
  },
  refreshInProgressParkingOrder: data => {
    dispatch({
      type: "REFRESH_IN_PROGRESS_PARKING_ORDERS",
      payload: data
    });
  }
});

connect(mapStateToProps, mapDispatchToProps)(EmployeeLayout)

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeLayout)