import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ConfirmButton from './components/ConfirmButton/ConfirmButton';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hello World!</h1>
                <ConfirmButton />
            </div>
        );
    }
}

export default App;
