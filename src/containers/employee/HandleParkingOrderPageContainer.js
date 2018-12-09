import HandleParkingOrderPage from '../../components/HandleParkingOrderPage.js'
import { connect } from "react-redux";

const mapStateToProps = state => ({
    handlingOrder: state.EmployeeReducer.handlingOrder
})

connect(mapStateToProps)(HandleParkingOrderPage)

export default connect(mapStateToProps)(HandleParkingOrderPage)