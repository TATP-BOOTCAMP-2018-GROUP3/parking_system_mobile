import React, { Component } from 'react'
import { List, WhiteSpace, WingBlank, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import ParkingOrderResource from '../../resources/ParkingOrderResource';

const Item = List.Item;

class ParkingPage extends Component {
    onSubmit = () => {
        let carId = this.props.form.getFieldProps('carId').value;
        let phoneNumber = this.props.form.getFieldProps('phoneNumber').value;
        if (carId === undefined || phoneNumber === undefined){
            return;
        }
        ParkingOrderResource.add({carId: carId, phoneNumber: phoneNumber})
        .then(res => {
            let location = res.headers.get('Location');
            let id = location.split('/')[2];
            this.props.updateLastOrder(id);
        })
    }

    render() {
        const { getFieldProps } = this.props.form;
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
                                        <td><h3>Create Parking Order</h3></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        <InputItem
                            {...getFieldProps('carId')}
                            clear
                            placeholder="Please input your Car id"
                        >Car ID: 
                        </InputItem>
                        <InputItem
                            {...getFieldProps('phoneNumber')}
                            type="number"
                            placeholder="Please input your contact number"
                        >Contact: 
                        </InputItem>
                    </List>
                    <WhiteSpace size="xl" />
                    <Button icon="check-circle-o" className="greenButton" onClick={this.onSubmit}>Submit</Button>
                </form>
            </WingBlank>
        )
    }
}

const ParkingPageWrapper = createForm()(ParkingPage);

export default ParkingPageWrapper;

