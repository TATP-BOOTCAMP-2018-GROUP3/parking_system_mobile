import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { TabBar } from 'antd-mobile'; 
import CustomerPageContainer from '../containers/CustomerPageContainer';
import ParkingOrderResource from '../resources/ParkingOrderResource';
import ViewPendingOrdersContainer from '../containers/employee/ViewPendingOrdersContainer.js';
import MyParkingOrderPageContainer from '../containers/employee/MyParkingOrderPageContainer';
import HandleParkingOrderPageContainer from '../containers/employee/HandleParkingOrderPageContainer';

class MainLayout extends Component {

  componentDidMount(){
    this.props.updateSelectedTab(window.location.pathname);
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
            selected={this.props.selectedTab === '/employee'}
            onPress={() => {
              this.props.updateSelectedTab('/employee');
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
            title="Grabbed Orders"
            key="grabbedParkingOrders"
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
            selected={this.props.selectedTab.includes('/employee/grabbedparkingorders')}
            onPress={() => {
              this.props.updateSelectedTab('/employee/grabbedparkingorders');
              window.history.pushState(null, null, "/employee/grabbedparkingorders");
              ParkingOrderResource.getByStatus("In Progress")
              .then(res => res.json())
              .then(res => {
                  this.props.refreshInProgressParkingOrder(res);
              });
            }}
          >
            {
              this.props.selectedTab === '/employee/grabbedparkingorders' ? 
              <MyParkingOrderPageContainer/> : <HandleParkingOrderPageContainer/>
            }
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
            selected={this.props.selectedTab === '/employee/myfetching'}
            onPress={() => {
              this.props.updateSelectedTab('/employee/myfetching');
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
            selected={this.props.selectedTab === '/logout'}
            onPress={() => {
              this.props.updateSelectedTab('/logout');
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
