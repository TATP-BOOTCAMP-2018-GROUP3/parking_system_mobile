import React, { Component } from 'react';
import { WhiteSpace, WingBlank, Result, Icon } from 'antd-mobile';

class CompleteOrderPage extends Component {

    render() {
        const order = this.props.handlingOrder;
        return (
            <WingBlank size="md">
                <WhiteSpace size="sm" />
                <Result
                    img={<Icon type="check-circle" style={{ fill: '#21ba45', width: '60px', height: '60px' }} />}
                    title="Order Completed!"
                    message= {"You have completed order of ID: " +  order.id}
                />
            </WingBlank>
        )
    }
}

export default CompleteOrderPage;
