import React, { Component } from 'react';
import { List, Button } from 'antd-mobile';
import ParkingOrderResource from '../resources/ParkingOrderResource';

const Item = List.Item;
const Brief = Item.Brief;

class ViewPendingOrdersPage extends Component {
    componentDidMount() {
        this.getAllPendingOrders();
    }

    getAllPendingOrders(){
        ParkingOrderResource.getByStatus("Pending")
        .then(res => res.json())
        .then(res => {
            this.props.refreshPendingOrders(res);
        });
    }

    grabOrder(order){
        ParkingOrderResource.grab(order)
        .then(res => this.getAllPendingOrders());
    }

    render() {
        return (
            <List renderHeader={() => 'All Pending Orders'} style={{maxHeight: '200px'}}>
                {this.props.pendingOrders.map((order) => 
                <Item
                    multipleLine
                    onClick={() => {}}
                    platform="android"
                    key={order.id}
                >
                <table style={{width: '100%'}}>
                    <tbody>
                        <tr>
                            <td style={{width: '50%'}}>
                                <b>Order: {order.id}</b>
                                <Brief>
                                <b>CarID:</b> {order.carId} <br/>
                                <b>Contact Number:</b> {order.phoneNumber}
                                </Brief>
                            </td>
                            <td style={{width: '50%', float: 'right'}}>
                                <Button type="primary" icon="check-circle-o" inline style={{ float: 'right'}} onClick={() => this.grabOrder(order)}>Grab!</Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </Item>)}
            </List>
        )
    }
}

export default ViewPendingOrdersPage;
