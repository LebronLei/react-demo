import React, { Component } from 'react';
// import logo from './logo.svg';
import './home.scss';

import styles from '../../style/index.js';
import { HashRouter, Route } from 'react-router-dom';

import CommonHeader from '../../components/header/commonHeader';
import CommonFooter from '../../components/footer/commonFooter';
// import friendMessage from '../../pages/userCenter/message/friendMessage';

// const setStyle = {
//     fontSize: '40px',
//     color:'red',
//    }

class Home extends React.Component {
    // getInitialState() {
    //     return {
    //         styles: {
    //             fontSize: '40px',
    //             color:'red',
    //         }

    //     }

    // };
    constructor(props) {
        super(props);
        this.state = {
            name: '2222',
            headerData: {
                icon: '',
                title: '我的成就'
            }
        };
    }

    // componentWillMount() {
    //     console.log(1111)
    // }

    componentWillMount() {}

    clickOne() {
        console.log('click one');
    }

    render() {
        return (
            // <div>
            //     {/* <Header/> */}
            //     <CommonHeader />
            //     <div>
            //         {/* <Route path="/" exact component={Home} /> */}
            //         <Route
            //             exact
            //             path="/friendMessage"
            //             component={FriendMessage}
            //         />
            //         <Route exact path="/allTask" component={AllTask} />
            //         <Route
            //             exact
            //             path="/productCenter"
            //             component={ProductCenter}
            //         />
            //     </div>
            // </div>

            <div className="home">
                {/* <CommonHeader headerData={this.state.headerData} /> */}
                <CommonHeader />
                <header className="home-header">
                    {/* <img src={logo} className="home-logo" alt="logo" /> */}
                    <img
                        className="banner"
                        src={require('../../assets/image/home/banner.png')}
                        alt=""
                    />
                    <p onClick={this.clickOne} style={styles.Header}>
                        5 Edit <code>src/home.js</code> and save to reload.
                    </p>
                    <a href="#/friendMessage/">A标签方式跳转</a>
                    <div
                        onClick={() =>
                            this.props.history.push({
                                pathname: '/friendMessage/',
                                query: {
                                    id: 3
                                }
                            })
                        }
                    >
                        push-query方式跳转
                    </div>
                    {/* <HashRouter>
                            <Route
                                path="/friendMessage"
                                component={friendMessage}
                            />
                        </HashRouter> */}

                    <div
                        onClick={() =>
                            this.props.history.push({
                                pathname: '/friendMessage',
                                state: { id: 5555 }
                            })
                        }
                    >
                        push-state方式跳转
                    </div>
                    {/* <a
                className="home-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a> */}
                </header>
                <CommonFooter />
            </div>
        );
    }
}

export default Home;
