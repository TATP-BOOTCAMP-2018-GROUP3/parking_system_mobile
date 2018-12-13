import React, { Component } from 'react';
import { List, WhiteSpace, WingBlank, Picker, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import ParkingOrderResource from '../resources/ParkingOrderResource';
import ParkingClerkResource from '../resources/ParkingClerkResource';

const Item = List.Item;

class HandleParkingOrderPage extends Component {

    componentDidMount() {
        if (localStorage.getItem('AUTH') === null && localStorage.getItem('ROLE') === null) {
          return;
        }
        ParkingClerkResource.getOwnedParkingLots()
        .then(res => res.json())
        .then(res => {
            this.props.refreshAllParkingLots(res);
        })
    }

    onSubmit = () => {
        if (this.props.form.getFieldProps('parkingLot').value === undefined){
            return;
        }
        let parkingLotId = this.props.form.getFieldProps('parkingLot').value[0];
        ParkingOrderResource.markCompleted({...this.props.handlingOrder, parkingLotId: parkingLotId, ownedByEmployeeId: Number(localStorage.getItem('ID'))})
        .then(res => {
            this.props.updateSelectedTab('/employee/completeorder');
            window.history.pushState(null, null, "/employee/completeorder");
        })
        .catch(res => console.log(res));
    }

    render() {
        const { getFieldProps } = this.props.form;
        const order = this.props.handlingOrder;
        const employeeId = Number(localStorage.getItem('ID'))
        const parkingLots = this.props.parkingLots
            .filter(parkingLot => {return (parkingLot.availablePositionCount > 0)})
            .map(parkingLot => {
                return {
                    label: parkingLot.parkingLotName + ": (" + parkingLot.availablePositionCount + "/" + parkingLot.capacity + ")",
                    value: parkingLot.id
                }
            });
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
                        { order.status === 'Completed' ? 
                            <Item
                                multipleLine
                                onClick={() => {}}
                                key='parkingLot'
                            >
                                <table style={{width: '100%'}}>
                                    <tbody>
                                        <tr>
                                            <td>ParkingLot: </td>
                                            <td style={{float: 'right'}}>{order.parkingLot}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Item> : 
                            <Picker data={parkingLots} extra="Please choose" cols={1} {...getFieldProps('parkingLot', {
                                    validate: [{
                                    trigger: 'onBlur',
                                    rules: [{
                                        required: true,
                                    }]
                                }]})}>
                                <Item multipleLine arrow="horizontal">&nbsp;Parking Lot: </Item>
                            </Picker>
                        }
                    </List>
                    <WhiteSpace size="xl" />
                        { order.status === 'Completed' ? 
                            null : 
                            <Button icon="check-circle-o" className="greenButton" onClick={this.onSubmit} disabled={!this.props.form.getFieldProps('parkingLot').value}>Done !</Button>
                        }
                </form>
            </WingBlank>
        )
    }
}

const HandleParkingOrderPageWrapper = createForm()(HandleParkingOrderPage);

export default HandleParkingOrderPageWrapper;
