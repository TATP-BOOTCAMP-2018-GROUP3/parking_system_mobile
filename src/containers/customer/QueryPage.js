import React, { Component } from 'react'
import { List, WhiteSpace, WingBlank, InputItem, Button, Card, Modal } from 'antd-mobile';
import { createForm } from 'rc-form';
import ParkingOrderResource from '../../resources/ParkingOrderResource';
import './QueryPage.css'

const Item = List.Item;

class QueryPage extends Component {
    constructor(props) {
        super(props);
        this.state = { result: false}
    }

    onSubmit = () => {
        let parkingOrderId = this.props.form.getFieldProps('parkingOrderId').value;
        if (parkingOrderId === undefined) {
            alert("please enter the data")
            return;
        }
        ParkingOrderResource.getById(parkingOrderId)
            .then(res => res.json())
            .then(res => {
                if (res.status === 400) {
                    this.setState({ result: "The parking order does not exist" })
                } else {
                    this.setState({ result: "Order (Id:" + parkingOrderId + ") is " + res.status })
                }

            })
            .catch(res => {
                this.setState({ result: "Order (Id:" + parkingOrderId + ") does not exist" })
            });
    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>

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
                                            <td><h3>Parking Order Query</h3></td>
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
                        </List>
                        <WhiteSpace size="xl" />
                        <Button icon="check-circle-o" className="greenButton" onClick={this.onSubmit} disabled={(!this.props.form.getFieldProps('parkingOrderId').value)}>Search</Button>
                    </form>

                    <Modal
                        visible={(this.state.result!=false)}
                        transparent
                        maskClosable={false}
                        onClose={() =>  { this.setState({result:false})} }
                        title="Query Result"
                        footer={[{ text: 'Ok', onPress: () => { this.setState({result:false})} }]}
                        wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                    >
                        <div style={{ height: 100, overflow: 'scroll' }}>
                            {this.state.result}
                        </div>
                    </Modal>

                </WingBlank>
            </div>
        )
    }
}

const QueryPageWrapper = createForm()(QueryPage);

export default QueryPageWrapper;

