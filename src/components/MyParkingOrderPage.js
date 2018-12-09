import React, { Component } from 'react';
import { List, Tag } from 'antd-mobile';
import ParkingOrderResource from '../resources/ParkingOrderResource';

const Item = List.Item;
const Brief = Item.Brief;

class MyParkingOrderPage extends Component {
    componentDidMount() {
        this.getAllInProgressParkingOrders();
    }

    getAllInProgressParkingOrders(){
        ParkingOrderResource.getByStatus("In Progress")
        .then(res => res.json())
        .then(res => {
            this.props.refreshInProgressParkingOrder(res);
        });
    }

    render() {
        return (
            <List renderHeader={() => 'Grabbed Parking Orders'} style={{maxHeight: '200px'}}>
                {this.props.inProgressOrders.length > 0 ?
                    this.props.inProgressOrders.map((order) => 
                    <Item
                        multipleLine
                        onClick={() => {}}
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
                                        <td>Car ID: {order.carId}</td>
                                    </tr>
                                    <tr>
                                        <td>Contact Number: {order.phoneNumber}</td>
                                    </tr>
                                    <tr>
                                        <td><Tag style={{backgroundColor: '#fbbd08', color: 'white', borderColor: '#fbbd08', lineHeight: '1.5'}}> {order.status} </Tag></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Brief>
                    </Item>
                    ) :
                    <h3 style={{textAlign: 'center'}}>You havn't grabbed any order!</h3>
                }
            </List>
        )
    }
}

export default MyParkingOrderPage;
