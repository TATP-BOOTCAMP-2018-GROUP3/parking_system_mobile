import React, { Component } from 'react';
import { WhiteSpace, WingBlank, Result, Icon } from 'antd-mobile';

class LastOrderPage extends Component {

    render() {
        return (
            <WingBlank size="md">
                <WhiteSpace size="sm" />
                <Result
                    img={<Icon type="check-circle" style={{ fill: '#21ba45', width: '60px', height: '60px' }} />}
                    title="Order Submmited!"
                    message= {"Your order id is: " +  this.props.orderId + ". Please wait for our staff to contact you."}
                />
            </WingBlank>
        )
    }
}

export default LastOrderPage;
