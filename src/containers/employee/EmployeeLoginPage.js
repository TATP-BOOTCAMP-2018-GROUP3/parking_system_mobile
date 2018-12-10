import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { List, InputItem, Switch, Stepper, Slider, Radio, Checkbox, TextareaItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

export default class EmployeeLoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curTime: new Date().toLocaleString()
        };
    }

    directToEmployeePageContainer = () => {
        let path = "/employee";
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
                <h1>Welcome!</h1>

                <p>Date: {this.state.curTime}</p>

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
                <Button type="primary" onClick={this.directToEmployeePageContainer}>Login</Button><WhiteSpace />
                {/* <Button type="primary" onClick={this.sendSimpleResponseToBackEnd}>Testing for simple request from BE</Button><WhiteSpace /> */}


            </div>
        )
    }
}
EmployeeLoginPage = createForm()(EmployeeLoginPage);