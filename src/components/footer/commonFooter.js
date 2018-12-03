import React, { Component } from 'react';
import './commonFooter.scss';
import { Button} from 'antd-mobile';

class commonFooter extends Component{
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log(888)
    }


    render() {
        return (
            <div className='commonFooter'>
          
                
                
            <a href='#/allTask/'>
                <div className="list">
                    <i className="iconfont">&#xe606;</i>
                    <div className="name">所有任务</div>
                </div>
            </a>
                
            <a href='#/allTask/'>
                <div className="list">
                    <i className="iconfont">&#xe606;</i>
                    <div className="name">历史成就</div>
                </div>
            </a>
            
            <a href='#/allTask/'>
                <div className="list center">
                    <i className="iconfont">&#xe606;</i>
                </div>
            </a>
            
            <a href='#/allTask/'>
                <div className="list">
                    <i className="iconfont">&#xe606;</i>
                    <div className="name">查看好友</div>
                </div>
            </a>
            
            <a href='#/allTask/'>
                <div className="list">
                    <i className="iconfont">&#xe606;</i>
                    <div className="name">消息提醒</div>
                </div>
            </a>
    
              
            </div>
        )
    }
}

export default commonFooter;