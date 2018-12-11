import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import AuthResource from '../../resources/AuthResource';

class EmployeeLoginPage extends Component {
    constructor(props) {
        super(props);
    }

    submitLoginRequest = () => {
        let username = this.props.form.getFieldProps('username').value;
        let password = this.props.form.getFieldProps('password').value;
        AuthResource.login({accountName: username, password: password})
        .then(res => {
            if (!(res.status === 200)) {
                throw new Error(res.status)
            }
            return res.json();
        })
        .then(res => {
            let tokenPayload = JSON.parse(atob(res.token.split('.')[1]));
            localStorage.setItem('AUTH', res.token);
            localStorage.setItem('ROLE', tokenPayload.role);
            localStorage.setItem('ID', tokenPayload.id);
            localStorage.setItem('USERNAME', tokenPayload.username);
            this.props.history.push('/employee');
        })
        .catch(error => {
            if (error.message === '400') {
                console.log('login fail!');
            } else if (error.message === '500') {
                console.log('server unavailable');
            }
        })
    }

    componentWillMount() {
        if (localStorage.getItem('AUTH') !== null && localStorage.getItem('ROLE') !== null) {
            this.props.history.push('/employee');
            return;
        }
        setInterval(function () {
            this.setState({
                curTime: new Date().toLocaleString()
            })
        }.bind(this), 1000);
    }
    render() {

        const { getFieldProps } = this.props.form;
        return (
            <WingBlank>
                <h1 style={{textAlign: 'center'}}>Employee Login</h1>

                <List style={{borderRadius: '5px', borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd'}}>
                    <InputItem
                        {...getFieldProps('username')}
                        clear
                        placeholder="User"
                    >
                    User
                    </InputItem>
                    <InputItem
                        type="password"
                        {...getFieldProps('password')}
                        clear
                        placeholder="Please type your password"
                    >
                    Password
                    </InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.submitLoginRequest}>Login</Button>
                <WhiteSpace />

            </WingBlank>
        )
    }
}
EmployeeLoginPage = createForm()(EmployeeLoginPage);
export default EmployeeLoginPage;