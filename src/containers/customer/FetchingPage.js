import React, { Component } from 'react'
import { List, WhiteSpace, WingBlank, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import ReturnOrderResource from '../../resources/ReturnOrderResource';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Item = List.Item;

class FetchingPage extends Component {
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

    onSubmit = () => {
        let parkingOrderId = this.props.form.getFieldProps('parkingOrderId').value;
        let phoneNumber = this.props.form.getFieldProps('phoneNumber').value;
        if (parkingOrderId === undefined || phoneNumber === undefined) {
            alert("please enter the data")
            return;
        }
        ReturnOrderResource.add({ parkingOrderId: parkingOrderId, phoneNumber: phoneNumber })
            .then(res => {
                if (res.status === 400) {
                    this.createNotification({
                        "type": "error",
                        "title": "Cannot Create",
                        "body": "The parking order does not exist"
                    })
                } else {
                    let location = res.headers.get('Location');
                    let id = location.split('/')[2];
                    ReturnOrderResource.getById(id)
                        .then(res => res.json())
                        .then(res => {
                            this.props.updateLastOrder(res);
                        });
                }

            })
            .catch(res => {
                this.createNotification({
                    "type": "error",
                    "title": "Fail to create",
                    "body": "The parking order does not exist"
                })
                console.log(res)
            });
    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <NotificationContainer />

                <WingBlank size="md">
                    <WhiteSpace size="sm" />
                    <form onSubmit={this.onSubmit}>
                        <List>
                            <Item
                                multipleLine
                                onClick={() => { }}
                                key='header'
                            >
                                <table style={{ width: '100%', textAlign: 'center' }}>
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
                        <Button icon="check-circle-o" className="greenButton" onClick={this.onSubmit} disabled = {(!this.props.form.getFieldProps('parkingOrderId').value) || (!this.props.form.getFieldProps('phoneNumber').value)}>Submit</Button>
                    </form>
                </WingBlank>
            </div>
        )
    }
}

const FetchingPageWrapper = createForm()(FetchingPage);

export default FetchingPageWrapper;

