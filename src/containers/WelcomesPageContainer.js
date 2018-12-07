import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { Button } from 'antd-mobile';
import { WhiteSpace } from 'antd-mobile';

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
        return (
            <div>
                <h1>Welcome!</h1>
                <Button type="primary" onClick={this.directToCustomerPageContainer}>Login</Button><WhiteSpace />
                <Button type="primary" onClick={this.sendSimpleResponseToBackEnd}>Testing for simple request from BE</Button><WhiteSpace />


            </div>
        )
    }
}
