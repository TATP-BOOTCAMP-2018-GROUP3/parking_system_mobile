import HandleParkingOrderPage from '../../components/HandleParkingOrderPage.js'
import { connect } from "react-redux";

const mapStateToProps = state => ({
    handlingOrder: state.EmployeeReducer.handlingOrder
})

const mapDispatchToProps = dispatch => ({
    updateSelectedTab: tab => {
      dispatch({
        type: "UPDATE_SELECTED_TAB",
        payload: tab
      });
    }
  });

connect(mapStateToProps, mapDispatchToProps)(HandleParkingOrderPage)

export default connect(mapStateToProps, mapDispatchToProps)(HandleParkingOrderPage)