import React, { Component } from 'react';
import { List, WhiteSpace, WingBlank, Picker, Button } from 'antd-mobile';
import ReturnOrderResource from '../resources/ReturnOrderResource';
import './HandleOrderPage.css'

const Item = List.Item;

class HandleReturnOrderPage extends Component {

    onSubmit = () => {
        ReturnOrderResource.markCompleted(this.props.handlingOrder)
        .then(res => {
            this.props.updateSelectedTab('/employee/completeorder');
            window.history.pushState(null, null, "/employee/completeorder");
        });
    }

    render() {
        const order = this.props.handlingOrder;
        return (
            <WingBlank size="md">
                <WhiteSpace size="sm" />
                <form onSubmit={this.onSubmit}>
                    <List>
                        <Item
                            multipleLine
                            onClick={() => {}}
                            key='header'
                        >
                            <table style={{width: '100%', textAlign: 'center'}}>
                                <tbody>
                                    <tr>
                                        <td><h3>Return Order</h3></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        <Item
                            multipleLine
                            onClick={() => {}}
                            key='orderId'
                        >
                            <table style={{width: '100%'}}>
                                <tbody>
                                    <tr>
                                        <td>Order ID: </td>
                                        <td style={{float: 'right'}}>{order.id}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        <Item
                            multipleLine
                            onClick={() => {}}
                            key='parkingOrderId'
                        >
                            <table style={{width: '100%'}}>
                                <tbody>
                                    <tr>
                                        <td>Parking Order ID: </td>
                                        <td style={{float: 'right'}}>{order.parkingOrderId}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        <Item
                            multipleLine
                            onClick={() => {}}
                            key='parkingLot'
                        >
                            <table style={{width: '100%'}}>
                                <tbody>
                                    <tr>
                                        <td>Parking Lot: </td>
                                        <td style={{float: 'right'}}>{order.parkingLot}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        <Item
                            multipleLine
                            onClick={() => {}}
                            key='carId'
                        >
                            <table style={{width: '100%'}}>
                                <tbody>
                                    <tr>
                                        <td>Car ID: </td>
                                        <td style={{float: 'right'}}>{order.carId}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        <Item
                            multipleLine
                            onClick={() => {}}
                            key='contactNumber'
                        >
                            <table style={{width: '100%'}}>
                                <tbody>
                                    <tr>
                                        <td>Contact Number: </td>
                                        <td style={{float: 'right'}}>{order.phoneNumber}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        <Item
                            multipleLine
                            onClick={() => {}}
                            key='status'
                        >
                            <table style={{width: '100%'}}>
                                <tbody>
                                    <tr>
                                        <td>Current Status: </td>
                                        <td style={{float: 'right'}}>{order.status}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                    </List>
                    <WhiteSpace size="xl" />
                    <Button icon="check-circle-o" className="greenButton" onClick={this.onSubmit}>Done !</Button>
                </form>
            </WingBlank>
        )
    }
}

export default HandleReturnOrderPage;
