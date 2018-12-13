import React, { Component } from 'react';
import { TabBar } from 'antd-mobile'; 
import ParkingOrderResource from '../resources/ParkingOrderResource';
import ReturnOrderResource from '../resources/ReturnOrderResource';
import ParkingClerkResource from '../resources/ParkingClerkResource';
import ViewPendingOrdersContainer from '../containers/employee/ViewPendingOrdersContainer';
import MyParkingOrderPageContainer from '../containers/employee/MyParkingOrderPageContainer';
import MyReturnOrderPageContainer from '../containers/employee/MyReturnOrderPageContainer';
import HandleParkingOrderPageContainer from '../containers/employee/HandleParkingOrderPageContainer';
import HandleReturnOrderPageContainer from '../containers/employee/HandleReturnOrderPageContainer';
import CompleteOrderPageContainer from '../containers/employee/CompleteOrderPageContainer';
import { sortInProgressOrder } from'../util/GeneralUtil';

class MainLayout extends Component {

  componentWillMount(){
    if (localStorage.getItem('AUTH') === null && localStorage.getItem('ROLE') === null) {
      this.props.history.push('/employeelogin');
      return;
    }
  }

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
              })
              .catch(res => console.log(res));;
            }}
          >
            {
              this.props.selectedTab === '/employee/completeorder' ? 
              <CompleteOrderPageContainer/> : <ViewPendingOrdersContainer/>
            }
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
              ParkingClerkResource.getOwnedParkingOrders(this.props.employeeId)
              .then(res => res.json())
              .then(res => {
                  this.props.refreshInProgressParkingOrder(res.sort(sortInProgressOrder));
              })
              .catch(res => console.log(res));
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
            selected={this.props.selectedTab.includes('/employee/returnorders')}
            onPress={() => {
              this.props.updateSelectedTab('/employee/returnorders');
              window.history.pushState(null, null, "/employee/returnorders");
              ParkingClerkResource.getOwnedReturnOrders(this.props.employeeId)
                  .then(res => res.json())
                  .then(res => {
                      this.props.refreshPendingOrders(res.sort(sortInProgressOrder));
                  })
                  .catch(res => console.log(res));
            }}
          >
            {
              this.props.selectedTab === '/employee/returnorders' ? 
              <MyReturnOrderPageContainer/> : <HandleReturnOrderPageContainer/>
            }
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
              localStorage.clear();
              this.props.history.push('/');
            }}
            >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default MainLayout;
