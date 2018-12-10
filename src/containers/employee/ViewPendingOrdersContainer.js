import ViewPendingOrdersPage from '../../components/ViewPendingOrdersPage.js'
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
  updateSelectedTab: tab => {
    dispatch({
      type: "UPDATE_SELECTED_TAB",
      payload: tab
    });
  },
  handleUpdatePopupMsg: msg => {
    dispatch({
      type: "UPDATE_POPUP_MSG",
      payload: msg
    });
  },
});

connect(mapStateToProps, mapDispatchToProps)(ViewPendingOrdersPage)

export default connect(mapStateToProps, mapDispatchToProps)(ViewPendingOrdersPage)