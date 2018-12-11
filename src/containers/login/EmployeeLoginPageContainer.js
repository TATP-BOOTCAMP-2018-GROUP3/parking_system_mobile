import EmployeeLoginPage from '../../components/login/EmployeeLoginPage.js'
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => ({
  refreshEmployeeId: data => {
    dispatch({
      type: "REFRESH_EMPLOYEE_ID",
      payload: data
    });
  }
});

connect(null, mapDispatchToProps)(EmployeeLoginPage)

export default connect(null, mapDispatchToProps)(EmployeeLoginPage)