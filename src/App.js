import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import BookPage from './components/BookPage';

class App extends Component {

    render() {

        return (
            <div className="App">
                <h1>Hipster Book Reviews</h1>
                <Router>
                  <Route exact path="/" component={Books} />
                  <Route exact path="/book/:id" component={BookPage} />
                </Router>
            </div>
        );
    };
};

export default App;
