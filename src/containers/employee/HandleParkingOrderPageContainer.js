import HandleParkingOrderPage from '../../components/HandleParkingOrderPage.js'
import { connect } from "react-redux";

const mapStateToProps = state => ({
  employeeId: state.LoginReducer.employeeId,
  handlingOrder: state.EmployeeReducer.handlingOrder,
  parkingLots: state.EmployeeReducer.parkingLots
})

const mapDispatchToProps = dispatch => ({
    updateSelectedTab: tab => {
      dispatch({
        type: "UPDATE_SELECTED_TAB",
        payload: tab
      });
    },
    refreshAllParkingLots: parkingLots => {
      dispatch({
        type: "REFRESH_ALL_PARKING_LOTS",
        payload: parkingLots
      });
    }
  });

connect(mapStateToProps, mapDispatchToProps)(HandleParkingOrderPage)

export default connect(mapStateToProps, mapDispatchToProps)(HandleParkingOrderPage)