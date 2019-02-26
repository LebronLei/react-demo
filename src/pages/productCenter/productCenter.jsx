import React, { Component } from 'react';
import './productCenter.scss';
import CommonHeader from '../../components/header/commonHeader';
class productCenter extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="productCenter">
                <CommonHeader />
                <img
                    className="banner"
                    src={require('../../assets/image/productCenter/banner.png')}
                    alt=""
                />
                productCenter
            </div>
        );
    }
}
export default productCenter;
