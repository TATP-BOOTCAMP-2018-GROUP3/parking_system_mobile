import React, { Component } from 'react';
import { List, Tag } from 'antd-mobile';
import ParkingClerkResource from '../resources/ParkingClerkResource';
import { sortInProgressOrder } from'../util/GeneralUtil';

const Item = List.Item;
const Brief = Item.Brief;

class MyReturnOrderPage extends Component {
    componentDidMount() {
        this.getAllOwnedParkingOrders();
    }

    getAllOwnedParkingOrders(){
        ParkingClerkResource.getOwnedReturnOrders(this.props.employeeId)
            .then(res => res.json())
            .then(res => {
                this.props.refreshPendingOrders(res.sort(sortInProgressOrder));
            })
            .catch(res => console.log(res));
    }

    handleOrder(order){
        let newPathName = this.props.selectedTab + '/' + order.id;
        window.history.pushState(null, null, newPathName);
        this.props.handleSelectedOrder(order);
        this.props.updateSelectedTab(newPathName);
    }

    render() {
        return (
            <List renderHeader={() => 'User: ' + localStorage.USERNAME + ' - ' + 'Pending Return Orders'} style={{maxHeight: '200px'}}>
                {this.props.pendingOrders.length > 0 ?
                    this.props.pendingOrders.map((order) => 
                    <Item
                        multipleLine
                        onClick={() => {this.handleOrder(order)}}
                        platform="android"
                        key={order.id}
                    >
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div style={{fontWeight: 'bold'}}>
                                            Order: {order.id}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Brief>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Parking Order ID: {order.parkingOrderId}</td>
                                    </tr>
                                    <tr>
                                        <td>Car ID: {order.carId}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact Number: {order.phoneNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            { order.status === 'Pending' ?
                                                <Tag style={{ backgroundColor: '#db2828', color: 'white', borderColor: '#db2828', lineHeight: '1.5' }}> {order.status} </Tag>
                                                :
                                                <Tag style={{ backgroundColor: '#21ba45', color: 'white', borderColor: '#21ba45', lineHeight: '1.5' }}> {order.status} </Tag>
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Brief>
                    </Item>
                    ) :
                    <h3 style={{textAlign: 'center'}}>No Return Orders Waiting For Pick Up!</h3>
                }
            </List>
        )
    }
}

export default MyReturnOrderPage;
