import React, { Component } from 'react'
import { TabBar, WingBlank, WhiteSpace } from 'antd-mobile';
import './CustomerPageContainer.css'

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

export default class CustomerPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            hidden: !this.state.hidden,
                        });
                    }}
                >
                    Click to show/hide tab-bar
            </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                    onClick={(e) => {
                        e.preventDefault();
                        this.setState({
                            fullScreen: !this.state.fullScreen,
                        });
                    }}
                >
                    Click to switch fullscreen
            </a>
            </div>
        );
    }

    render() {
        return (

            <div style={{ padding: '15px 0' }}>
                Customer Page Container !!

      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(data:image/png;base64,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) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(data:image/png;base64,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) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="Park"
                            key="Park"
                            dot
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'greenTab',
                                });
                            }}
                        >
                            {this.renderContent('Friend')}
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: 'data:image/jpeg;base64,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' }}
                            selectedIcon={{ uri: 'data:image/jpeg;base64,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' }}
                            title="Fetch"
                            key="fetch"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'yellowTab',
                                });
                            }}
                        >
                            {this.renderContent('My')}
                        </TabBar.Item>
                    </TabBar>
                </div>

            </div>
        )
    }
}
