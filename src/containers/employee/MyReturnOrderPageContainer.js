import MyReturnOrderPage from '../../components/MyReturnOrderPage.js'
import { connect } from "react-redux";

const mapStateToProps = state => ({
  employeeId: state.LoginReducer.employeeId,
  selectedTab: state.EmployeeReducer.selectedTab,
  pendingOrders: state.EmployeeReducer.pendingOrders
})

const mapDispatchToProps = dispatch => ({
  updateSelectedTab: tab => {
    dispatch({
      type: "UPDATE_SELECTED_TAB",
      payload: tab
    });
  },
  refreshPendingOrders: data => {
    dispatch({
      type: "REFRESH_PENDING_ORDERS",
      payload: data
    });
  },
  handleSelectedOrder: order => {
    dispatch({
      type: "UPDATE_HANDLING_ORDER",
      payload: order
    });
  },
});

connect(mapStateToProps, mapDispatchToProps)(MyReturnOrderPage)

export default connect(mapStateToProps, mapDispatchToProps)(MyReturnOrderPage)