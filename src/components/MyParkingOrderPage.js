import React, { Component } from 'react';
import { List, Tag } from 'antd-mobile';
import ParkingOrderResource from '../resources/ParkingOrderResource';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Item = List.Item;
const Brief = Item.Brief;

class MyParkingOrderPage extends Component {
    componentDidMount() {
        this.getAllInProgressParkingOrders();
        if (this.props.popupMsg && this.props.popupMsg.type === 'success') {
            this.createNotification(this.props.popupMsg.type, this.props.popupMsg)
            this.props.handleUpdatePopupMsg(null)
        }
    }

    createNotification = (type, popupMsg) => {
        switch (type) {
            case 'info':
                NotificationManager.info('Info message');
                break;
            case 'success':
                NotificationManager.success(this.props.popupMsg.body, this.props.popupMsg.title);
                break;
            case 'warning':
                NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
                break;
            case 'error':
                NotificationManager.error('Error message', 'Click me!', 5000, () => {
                    alert('callback');
                });
                break;
        };
    }

    getAllInProgressParkingOrders() {
        ParkingOrderResource.getByStatus("In Progress")
            .then(res => res.json())
            .then(res => {
                this.props.refreshInProgressParkingOrder(res);
            })
            .catch(res => console.log(res));
    }

    handleOrder(order) {
        let newPathName = this.props.selectedTab + '/' + order.id;
        window.history.pushState(null, null, newPathName);

        this.props.handleSelectedOrder(order);
        this.props.updateSelectedTab(newPathName);
    }

    render() {

        return (
            <div>

                <NotificationContainer />

                <List renderHeader={() => 'Grabbed Parking Orders'} style={{ maxHeight: '200px' }}>
                    {this.props.inProgressOrders.length > 0 ?
                        this.props.inProgressOrders.map((order) =>
                            <Item
                                multipleLine
                                onClick={() => { this.handleOrder(order) }}
                                platform="android"
                                key={order.id}
                            >
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div style={{ fontWeight: 'bold' }}>
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
                                                <td><Tag style={{ backgroundColor: '#fbbd08', color: 'white', borderColor: '#fbbd08', lineHeight: '1.5' }}> {order.status} </Tag></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Brief>
                            </Item>
                        ) :
                        <h3 style={{ textAlign: 'center' }}>You havn't grabbed any order!</h3>
                    }
                </List>
            </div>
        )
    }
}

export default MyParkingOrderPage;
