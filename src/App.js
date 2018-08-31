import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CreateUserForm from './Components/createUserForm';
import { graphql, compose } from 'react-apollo';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Gamesuite</h1>
                </header>
                <CreateUserForm />
            </div>
        );
    }
}

export default App;
