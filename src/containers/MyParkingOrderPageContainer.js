import MyParkingOrderPage from '../components/MyParkingOrderPage.js'
import { connect } from "react-redux";

const mapStateToProps = state => ({
    inProgressOrders: state.EmployeeReducer.inProgressOrders
})

const mapDispatchToProps = dispatch => ({
  refreshInProgressParkingOrder: data => {
    dispatch({
      type: "REFRESH_IN_PROGRESS_PARKING_ORDERS",
      payload: data
    });
  }
});

connect(mapStateToProps, mapDispatchToProps)(MyParkingOrderPage)

export default connect(mapStateToProps, mapDispatchToProps)(MyParkingOrderPage)