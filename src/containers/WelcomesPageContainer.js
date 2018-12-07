import React, { Component } from 'react'
import 'antd-mobile/dist/antd-mobile.css';
import { Button } from 'antd-mobile';
import { WhiteSpace } from 'antd-mobile';

export default class WelcomesPageContainer extends Component {
    sendSimpleResponseToBackEnd = () => {
        // alert("!")
        // fetch("https://parking-system-backend.herokuapp.com/parkingclerks", {
        //     method: 'get',
        //     headers: new Headers({
        //         'Content-Type': 'application/json'
        //     }),
        //     mode: 'no-cors',
        // })
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res)
        //     })
    }
    
    directToCustomerPageContainer = () => {

    }

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <Button type="primary" onClick={this.directToCustomerPageContainer}>Login</Button><WhiteSpace />
                <Button type="primary" onClick={this.sendSimpleResponseToBackEnd}>testing for simple requestion from BE</Button><WhiteSpace />
            </div>
        )
    }
}
