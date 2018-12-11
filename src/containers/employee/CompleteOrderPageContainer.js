import CompleteOrderPage from '../../components/CompleteOrderPage.js'
import { connect } from "react-redux";

const mapStateToProps = state => ({
    employeeId: state.LoginReducer.employeeId,
    handlingOrder: state.EmployeeReducer.handlingOrder
})

connect(mapStateToProps)(CompleteOrderPage)

export default connect(mapStateToProps)(CompleteOrderPage)