import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomesPage from './components/WelcomesPage'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WelcomesPage></WelcomesPage>
        </header>
      </div>
    );
  }
}

export default App;
