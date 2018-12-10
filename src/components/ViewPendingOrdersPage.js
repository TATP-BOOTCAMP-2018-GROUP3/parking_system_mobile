import React, { Component } from 'react';
import { List, Button } from 'antd-mobile';
import ParkingOrderResource from '../resources/ParkingOrderResource';

const Item = List.Item;
const Brief = Item.Brief;

class ViewPendingOrdersPage extends Component {
    componentDidMount() {
        this.getAllPendingOrders();
    }

    getAllPendingOrders() {
        ParkingOrderResource.getByStatus("Pending")
            .then(res => res.json())
            .then(res => {
                this.props.refreshPendingOrders(res);
            });
    }

    grabOrder(order) {
        ParkingOrderResource.grab(order)
            .then(res => this.getAllPendingOrders())
            .then(res => {  
                this.props.handleUpdatePopupMsg(
                    {
                        "title":"Successful Grabbed",
                        "body": "Order ID: " + order.id + ": Car ID:" + order.carId
                    }
                )
                this.props.updateSelectedTab('/employee/grabbedparkingorders');
                window.history.pushState(null, null, "/employee/grabbedparkingorders");
            }
            );

    }

    render() {
        return (
            <List renderHeader={() => 'All Pending Orders'} style={{ maxHeight: '200px' }}>
                {this.props.pendingOrders.length > 0 ?
                    this.props.pendingOrders.map((order) =>
                        <Item
                            multipleLine
                            onClick={() => { }}
                            platform="android"
                            key={order.id}
                        >
                            <table style={{ width: '100%' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ width: '50%' }}>
                                            <b>Order: {order.id}</b>
                                            <Brief>
                                                Car ID: {order.carId} <br />
                                                Contact Number: {order.phoneNumber}
                                            </Brief>
                                        </td>
                                        <td style={{ width: '50%', float: 'right' }}>
                                            <Button type="primary" icon="check-circle-o" inline style={{ float: 'right' }} onClick={() => this.grabOrder(order)}>Grab!</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>)
                    :
                    <h3 style={{ textAlign: 'center' }}>No pending orders right now!</h3>
                }
            </List>
        )
    }
}

export default ViewPendingOrdersPage;
