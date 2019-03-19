import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar.js';
import ShoppingList from './components/ShoppingList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <ShoppingList/>
      </div>
    );
  }
}

export default App;