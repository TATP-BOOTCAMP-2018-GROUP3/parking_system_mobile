import React, { Component } from 'react';
import { List, Tag } from 'antd-mobile';
import ParkingClerkResource from '../resources/ParkingClerkResource';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { sortInProgressOrder } from'../util/GeneralUtil';

const Item = List.Item;
const Brief = Item.Brief;

class MyParkingOrderPage extends Component {
    componentDidMount() {
        this.getAllOwnedParkingOrders();
        if (this.props.popupMsg && this.props.popupMsg.type != 'null') {
            this.createNotification(this.props.popupMsg)
            this.props.handleUpdatePopupMsg(null)
        }
    }

    createNotification = (popupMsg) => {
        let type = popupMsg.type
        switch (type) {
            case 'info':
                NotificationManager.info('Info message');
                break;
            case 'success':
                NotificationManager.success(popupMsg.body, popupMsg.title);
                break;
            case 'warning':
                NotificationManager.warning(popupMsg.body, popupMsg.title, 3000);
                break;
            case 'error':
                NotificationManager.error(popupMsg.body, popupMsg.title, 5000, () => {
                    // alert('callback');
                });
                break;
        };
    }

    getAllOwnedParkingOrders() {
        ParkingClerkResource.getOwnedParkingOrders(this.props.employeeId)
            .then(res => res.json())
            .then(res => {
                this.props.refreshInProgressParkingOrder(res.sort(sortInProgressOrder));
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

                <List renderHeader={() => 'User: ' + localStorage.USERNAME + ' - ' + 'Grabbed Parking Orders'} style={{ maxHeight: '200px' }}>
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
                                                <td>
                                                    { order.status === 'In Progress' ?
                                                        <Tag style={{ backgroundColor: '#fbbd08', color: 'white', borderColor: '#fbbd08', lineHeight: '1.5' }}> {order.status} </Tag>
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
                        <h3 style={{ textAlign: 'center' }}>You havn't grabbed any order!</h3>
                    }
                </List>
            </div>
        )
    }
}

export default MyParkingOrderPage;
