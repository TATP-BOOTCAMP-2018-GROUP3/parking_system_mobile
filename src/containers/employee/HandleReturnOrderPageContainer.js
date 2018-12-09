import HandleReturnOrderPage from '../../components/HandleReturnOrderPage.js'
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

connect(mapStateToProps, mapDispatchToProps)(HandleReturnOrderPage)

export default connect(mapStateToProps, mapDispatchToProps)(HandleReturnOrderPage)