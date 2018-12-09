import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'; 
import CustomerPageContainer from '../containers/CustomerPageContainer';
import ViewPendingOrdersContainer from '../containers/ViewPendingOrdersContainer.js';
import ParkingOrderResource from '../resources/ParkingOrderResource';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: window.location.pathname,
    };
  }


  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Pending Orders"
            key="pendingOrders"
            icon={<img 
              style={{
                width: '22px',
                height: '22px',
              }}
              src='/images/order_icon.svg' 
            />
            }
            selectedIcon={<img
              style={{
                width: '22px',
                height: '22px'
              }}
              src='/images/order_icon_selected.svg' 
            />
            }
            selected={this.state.selectedTab === '/employee'}
            onPress={() => {
              this.setState({
                selectedTab: '/employee',
              });
              window.history.pushState(null, null, "/employee");
              ParkingOrderResource.getByStatus("Pending")
              .then(res => res.json())
              .then(res => {
                  this.props.refreshPendingOrders(res);
              });
            }}
          >
            <ViewPendingOrdersContainer ref="viewPendingOrdersContainer"/>
          </TabBar.Item>
          <TabBar.Item
            title="Parking Orders"
            key="myParkingOrders"
            icon={<img 
              style={{
                width: '22px',
                height: '22px',
              }}
              src='/images/park_icon.svg' 
            />
            }
            selectedIcon={<img 
              style={{
                width: '22px',
                height: '22px',
              }}
              src='/images/park_icon_selected.svg' 
            />
            }
            selected={this.state.selectedTab === '/employee/myparking'}
            onPress={() => {
              this.setState({
                selectedTab: '/employee/myparking',
              });
              window.history.pushState(null, null, "/employee/myparking");
            }}
          >
            <CustomerPageContainer/>
          </TabBar.Item>
          <TabBar.Item
            title="Fetching Orders"
            key="myFetchingOrders"
            icon={<img 
              style={{
                width: '22px',
                height: '22px',
              }}
              src='/images/car_icon.svg' 
            />
            }
            selectedIcon={<img 
              style={{
                width: '22px',
                height: '22px',
              }}
              src='/images/car_icon_selected.svg' 
            />
            }
            selected={this.state.selectedTab === '/employee/myfetching'}
            onPress={() => {
              this.setState({
                selectedTab: '/employee/myfetching',
              });
              window.history.pushState(null, null, "/employee/myfetching");
            }}
          >
            <CustomerPageContainer/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Logout"
            key="logout"
            selected={this.state.selectedTab === '/logout'}
            onPress={() => {
              this.setState({
                selectedTab: '/logout',
              });
              window.history.pushState(null, null, "/login");
            }}
            >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MainLayout;
