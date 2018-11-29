import React, { Component } from 'react';
import './friendMessage.scss';
import { Button} from 'antd-mobile';

class friendMessage extends Component{

    componentWillMount() {
        console.log('query', this.props.location.query)
        console.log('state', this.props.location.state)
    }

    render() {
        return (
            <div className='friendMessage'>
                <div className="left">
               <i className="iconfont">&#xe606;</i>
                </div>
                {/* <Button type="primary">primary</Button> */}
                <div className="center" onClick={()=>this.props.history.push('')}>好友消息</div>
                <div className="right">right</div>
            </div>
        )
    }
}

export default friendMessage;