import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { List, InputItem, Switch, Stepper, Slider, Radio, Checkbox, TextareaItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import {Icon} from 'antd-mobile';

export default class WelcomesPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTime: new Date().toLocaleString()
        };
    }

    directToPage = (path) => {
        this.props.history.push(path);
    }

    componentWillMount() {
        setInterval(function () {
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }.bind(this), 1000);
    }
    render() {

        const { getFieldProps } = this.props.form;

        return (
            <div>
                <WhiteSpace size="md" />

                <WingBlank size="md" style={{textAlign: 'center'}}>
                    <img src='/images/parkingsmart_logo.svg'
                        style={{
                            width: '80%'
                        }}
                    />
                </WingBlank>
                
                <WhiteSpace size="md" />

                <WingBlank size="md">
                    <Button
                        style={{
                            height: '70px'
                        }}
                        onClick={() => {this.directToPage("/customer")}}>
                        <img src='/images/customer.svg'
                            style={{
                                width: '65px',
                                height: '65px'
                            }}
                        />
                        Customer
                 </Button>
                </WingBlank>

                <WhiteSpace size="md" />

                <WingBlank size="md">
                    <Button 
                        style={{
                            height: '70px'
                        }}
                        onClick={() => {this.directToPage("/employeeLogin")}}>
                        <img src='/images/parking_boy.svg'/>
                        Employee
                    </Button>
                </WingBlank>
                
                <WhiteSpace size="md" />
                
                <p>Date: {this.state.curTime}</p>
            </div>
        )
    }
}
WelcomesPageContainer = createForm()(WelcomesPageContainer);