import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { List, InputItem, Switch, Stepper, Slider, Radio, Checkbox, TextareaItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

export default class WelcomesPageContainer extends Component {
    sendSimpleResponseToBackEnd = () => {
        fetch("https://parking-system-backend.herokuapp.com/parkingclerks", { mode: 'cors' })
            .then(res => res.json())
            .then(res =>
                console.log(res)
            )
    }

    directToCustomerPageContainer = () => {
        let path = "/customer";
        this.props.history.push(path);
    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <h1>Welcome!</h1>
                
                <List>
                    {/* <List>表单输入项</List> */}
                    <List>
                        <InputItem
                            {...getFieldProps('input3', {
                                initialValue: 'User',
                            })}
                            clear
                            placeholder="User"
                        >User</InputItem>
                        <InputItem
                            {...getFieldProps('input4')}
                            clear
                            placeholder="请输入密码"
                        >Password</InputItem>
                    </List>
                </List>
                <Button type="primary" onClick={this.directToCustomerPageContainer}>Login</Button><WhiteSpace />
                <Button type="primary" onClick={this.sendSimpleResponseToBackEnd}>Testing for simple request from BE</Button><WhiteSpace />


            </div>
        )
    }
}
WelcomesPageContainer = createForm()(WelcomesPageContainer);