import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import styles from './style/index.js';

import CommonHeader from './components/header/commonHeader';

// const setStyle = {
//     fontSize: '40px',
//     color:'red',
//    }

class App extends Component {
    // getInitialState() {
    //     return {
    //         styles: {
    //             fontSize: '40px',
    //             color:'red',
    //         }

    //     }
        
    // };
    counstructor(props) {
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
            <CommonHeader></CommonHeader>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p onClick={this.clickOne} style={styles.Header}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
