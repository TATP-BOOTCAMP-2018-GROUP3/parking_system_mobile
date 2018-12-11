import React, { Component } from 'react'
import { List, WhiteSpace, WingBlank, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import ReturnOrderResource from '../../resources/ReturnOrderResource';

const Item = List.Item;

class FetchingPage extends Component {
    onSubmit = () => {
        let parkingOrderId = this.props.form.getFieldProps('parkingOrderId').value;
        let phoneNumber = this.props.form.getFieldProps('phoneNumber').value;
        if (parkingOrderId === undefined || phoneNumber === undefined){
            return;
        }
        ReturnOrderResource.add({parkingOrderId: parkingOrderId, phoneNumber: phoneNumber})
        .then(res => {
            let location = res.headers.get('Location');
            let id = location.split('/')[2];
            ReturnOrderResource.getById(id)
            .then(res => res.json())
            .then(res => {
                this.props.updateLastOrder(res);
            });
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
                                        <td><h3>Create Return Order</h3></td>
                                    </tr>
                                </tbody>
                            </table>
                        </Item>
                        <InputItem
                            {...getFieldProps('parkingOrderId')}
                            clear
                            placeholder="Please input your Parking Order ID"
                            labelNumber={18}
                        >Parking Order ID: 
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

const FetchingPageWrapper = createForm()(FetchingPage);

export default FetchingPageWrapper;

