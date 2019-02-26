import React, { Component } from 'react';
import './commonHeader.scss';
import { Button } from 'antd-mobile';
import { HashRouter, Route, withRouter } from 'react-router-dom';

class CommonHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    constructor(props, context) {
        super(props, context);
        this.state = {
            indexVal: 0,
            headerData: [
                {
                    name: '首页',
                    route: '/'
                },
                {
                    name: '产品中心',
                    route: '/productCenter'
                },
                {
                    name: '解决方案',
                    route: '/'
                }
            ]
        };
    }

    componentWillMount() {
        console.log(888, this.state.headerData, this.props.location.pathname);
        this.state.headerData.forEach((val, key) => {
            console.log(111, val, key);
            console.log(333, val.route, this.props.location.pathname);
            if (val.route === this.props.location.pathname) {
                console.log(222, val.route, this.props.location.pathname);
                this.setState({ indexVal: key });
            }
        });
    }

    checkList(list, index) {
        this.setState({
            indexVal: index
        });
        console.log(111, list.route);
        // return;

        this.props.history.push(list.route);
        // this.context.router.history.push({
        //     pathname: list.route
        //     // query: {
        //     // id: 3
        //     // }
        // });
    }

    render() {
        return (
            <div className="commonHeader">
                <img
                    className="left"
                    src={require('../../assets/image/home/logo.png')}
                    alt=""
                />
                {/* <Button type="primary">primary</Button> */}
                <div className="right">
                    {this.state.headerData.map((data, index) => (
                        <span
                            className={
                                this.state.indexVal === index ? 'on' : ''
                            }
                            onClick={this.checkList.bind(this, data, index)}
                            key={index}
                        >
                            {data.name}
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default withRouter(CommonHeader);
