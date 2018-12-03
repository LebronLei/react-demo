import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import styles from './style/index.js';
import {HashRouter,Route} from "react-router-dom"

import CommonHeader from './components/header/commonHeader';
import CommonFooter from './components/footer/commonFooter';
// import friendMessage from './pages/userCenter/friendMessage';

// const setStyle = {
//     fontSize: '40px',
//     color:'red',
//    }

class App extends React.Component {
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
            name:'2222',
            headerData:{
                icon: '',
                title:'我的成就',
            }
        }
    }

    // componentWillMount() {
    //     console.log(1111)
    // }

    componentWillMount() {
        console.log(222)
        setTimeout(() => {
            console.log(333,styles)
        },1111)
    }

    clickOne() {
        console.log('click one')
    }

   


  render() {
    return (
        <div className="App">
            <CommonHeader headerData={this.state.headerData}></CommonHeader>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p onClick={this.clickOne} style={styles.Header}>
                    Edit <code>src/App.js</code> and save to reload.
                            
          </p>
                <a href='#/friendMessage/'>A标签方式跳转</a>
                
                <div onClick={() =>
                    this.props.history.push({
                 

                    pathname: '/friendMessage/',
                        query: {
                            id: 3
                        }
                    })
                }>push-query方式跳转</div>

                <div onClick={()=>this.props.history.push({pathname:'/friendMessage',state:{id:5555}})}>push-state方式跳转</div>

                {/* <HashRouter> */}
                    {/* <Route path='/friendMessage' component={friendMessage}></Route> */}
                {/* </HashRouter> */}
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
            </header>
            <CommonFooter></CommonFooter>
      </div>
    );
  }
}

export default App;
