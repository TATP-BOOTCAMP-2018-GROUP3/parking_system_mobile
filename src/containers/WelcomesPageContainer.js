import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { List, InputItem, Switch, Stepper, Slider, Radio, Checkbox, TextareaItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';

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
                <h1>Welcome!</h1>

                <p>Date: {this.state.curTime}</p>

                <Button type="primary" inline style={{ marginRight: '4px' }} onClick={() => {this.directToPage("/customer")}}>Customer</Button>

                <Button type="primary" inline style={{ marginRight: '4px' }} onClick={() => {this.directToPage("/employeeLogin")}}>Employee</Button>


            </div>
        )
    }
}
WelcomesPageContainer = createForm()(WelcomesPageContainer);