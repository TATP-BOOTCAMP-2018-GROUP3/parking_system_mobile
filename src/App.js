import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import WelcomesPageContainer from './containers/WelcomesPageContainer';
import CustomerPageContainer from './containers/customer/CustomerPageContainer';
import EmployeeLayoutContainer from './containers/employee/EmployeeLayoutContainer';
import EmployeeLoginPageContainer from './containers/login/EmployeeLoginPageContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={WelcomesPageContainer} />
          <Route path="/customer" exact component={CustomerPageContainer} />
          <Route path="/employeelogin" component={EmployeeLoginPageContainer} />
          <Route path="/employee" component={EmployeeLayoutContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
