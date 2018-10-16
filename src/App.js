import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        this.state = {
            fontSize:'40px'
        }
    }

    componentWillMount() {
        console.log(1111)
    }

    componentWillMount() {
        console.log(222)
    }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p className='item'>
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
