import React, { Component } from 'react'
import { TabBar, WingBlank, WhiteSpace } from 'antd-mobile';
import './CustomerPageContainer.css'
import FetchingPage from './FetchingPage';
import ParkingPage from './ParkingPage';
import LastOrderPage from './LastOrderPage';
import QueryPage from './QueryPage';
import ParkingOrderResource from '../../resources/ParkingOrderResource';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

export default class CustomerPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'parkingPage',
            lastOrder: {}
        };
    }

    submittedOrder = (order) => {
        this.setState({
            selectedTab: 'lastOrder',
            lastOrder: order
        })
    }

    renderContent(pageText) {
        if (this.state.selectedTab === "parkingPage") {
            return (<ParkingPage updateLastOrder={this.submittedOrder} />);
        } else if (this.state.selectedTab === 'fetchingPage') {
            return (<FetchingPage updateLastOrder={this.submittedOrder} />);
        } else if (this.state.selectedTab === 'queryPage') {
            return (<QueryPage />);
        } else {
            return (<LastOrderPage order={this.state.lastOrder} />);
        }
    }

    render() {
        return (

            <div style={{ padding: '15px 0' }}>
                <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            icon={<img
                                style={{
                                    width: '22px',
                                    height: '22px',
                                }}
                                src='/images/home_icon.svg'
                            />
                            }
                            selectedIcon={<img
                                style={{
                                    width: '22px',
                                    height: '22px',
                                }}
                                src='/images/home_icon_selected.svg'
                            />
                            }
                            title="Home"
                            key="Home"
                            selected={this.state.selectedTab === 'logoutPage'}
                            onPress={() => {
                                this.props.history.push('/');
                            }}
                        >
                            {this.renderContent('logoutPage')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <img
                                    style={{
                                        width: '22px',
                                        height: '22px',
                                    }}
                                    src='/images/customer_park.svg'
                                />
                            }
                            selectedIcon={
                                <img
                                    style={{
                                        width: '22px',
                                        height: '22px',
                                    }}
                                    src='/images/customer_park_selected.svg'
                                />
                            }
                            title="Park"
                            key="Park"
                            // dot
                            selected={this.state.selectedTab === 'parkingPage'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'parkingPage',
                                });
                            }}
                        >
                            {this.renderContent('parkingPage')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={<img
                                style={{
                                    width: '22px',
                                    height: '22px',
                                }}
                                src='/images/customer_fetch.svg'
                            />
                            }
                            selectedIcon={<img
                                style={{
                                    width: '22px',
                                    height: '22px',
                                }}
                                src='/images/customer_fetch_selected.svg'
                            />
                            }
                            title="Fetch"
                            key="fetch"
                            selected={this.state.selectedTab === 'fetchingPage'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'fetchingPage',
                                });
                            }}
                        >
                            {this.renderContent('fetchingPage')}
                        </TabBar.Item>

                        <TabBar.Item
                            icon={<img
                                style={{
                                    width: '22px',
                                    height: '22px',
                                }}
                                src='/images/query_icon.svg'
                            />
                            }
                            selectedIcon={<img
                                style={{
                                    width: '22px',
                                    height: '22px',
                                }}
                                src='/images/query_icon_selected.svg'
                            />
                            }
                            title="Query"
                            key="Query"
                            selected={this.state.selectedTab === 'queryPage'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'queryPage',
                                });
                            }}
                        >
                            {this.renderContent('queryPage')}
                        </TabBar.Item>

                        {/* <TabBar.Item
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
                            title="My Last Order"
                            key="lastOrder"
                            hidden="Hidden"
                            selected={this.state.selectedTab === 'lastOrder'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'lastOrder',
                                });
                            }}
                        >
                            {this.renderContent('lastOrder')}
                        </TabBar.Item> */}
                    </TabBar>
                </div>

            </div>
        )
    }
}
