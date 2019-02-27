import React from 'react';
import './solution.scss';
import { Button } from 'antd-mobile';
import { findDOMNode } from 'react-dom';

import CommonHeader from '../../components/header/commonHeader';
class solution extends React.Component {
    constructor(props) {
        super(props);
        // return { userInput: '' };
        this.state = {
            userInput: 'test'
        };
    }
    // 只会在装载之前调用一次，在 render 之前调用，你可以在这个方法里面调用 setState 改变状态，并且不会导致额外调用一次 render
    componentWillMount() {
        console.log(111);
    }

    // 只会在装载完成之后调用一次，在 render 之后调用，从这里开始可以通过 ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点。
    componentDidMount() {
        console.log(222, findDOMNode(this));
    }

    clickInput(e) {
        this.setState({ userInput: e.target.value });
    }

    clearInput() {
        this.setState({ userInput: '' }, () => {
            this.refs.input.focus();
        });
    }

    render() {
        return (
            <div className="solution">
                <CommonHeader />
                <img
                    className="banner"
                    src={require('../../assets/image/solution/banner.png')}
                    alt=""
                />
                solution
                <hr />
                <Button type="primary" onClick={this.clearInput.bind(this)}>
                    clear and reset
                </Button>
                <input
                    type="text"
                    ref="input"
                    value={this.state.userInput}
                    onChange={this.clickInput.bind(this)}
                />
                <br />
                {this.state.userInput}
            </div>
        );
    }
}
export default solution;
