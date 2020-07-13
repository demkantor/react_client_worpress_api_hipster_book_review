import React, { Component } from 'react';
import './App.css';
import Books from './components/Books';

class App extends Component {

    render() {

        return (
            <div className="App">
                <h1>Hipster Book Reviews</h1>
                <Books />
            </div>
        );
    };
};

export default App;
