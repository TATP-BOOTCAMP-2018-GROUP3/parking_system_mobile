import React, { Component } from 'react';
import { List, WhiteSpace, WingBlank, Picker, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import ParkingOrderResource from '../resources/ParkingOrderResource';
import './HandleParkingOrderPage.css'

const Item = List.Item;

const parkingLots = [
                        {label: 'Parking Lot 1', value: 'Parking Lot 1'},
                        {label: 'Hong Kong Science Park Parking Lot', value: 'Hong Kong Science Park Parking Lot'},
                        {label: '南方軟件園 停車場', value: '南方軟件園 停車場'}
                    ]

class HandleParkingOrderPage extends Component {

    onSubmit = () => {
        if (this.props.form.getFieldProps('parkingLot').value === undefined){
            return;
        }
        let parkingLotId = this.props.form.getFieldProps('parkingLot').value[0];
        ParkingOrderResource.markCompleted({...this.props.handlingOrder, parkingLot: parkingLotId})
        .then(res => {
            this.props.updateSelectedTab('/employee/completeorder');
            window.history.pushState(null, null, "/employee/completeorder");
        });
    }

    render() {
        const { getFieldProps } = this.props.form;
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
                                        <td><h3>Parking Order</h3></td>
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
                        <Picker data={parkingLots} extra="Please choose" cols={1} {...getFieldProps('parkingLot', {
                                validate: [{
                                trigger: 'onBlur',
                                rules: [{
                                    required: true,
                                }]
                            }]})}>
                            <Item multipleLine arrow="horizontal">&nbsp;Parking Lot: </Item>
                        </Picker>
                    </List>
                    <WhiteSpace size="xl" />
                    <Button icon="check-circle-o" className="greenButton" onClick={this.onSubmit}>Done !</Button>
                </form>
            </WingBlank>
        )
    }
}

const HandleParkingOrderPageWrapper = createForm()(HandleParkingOrderPage);

export default HandleParkingOrderPageWrapper;
