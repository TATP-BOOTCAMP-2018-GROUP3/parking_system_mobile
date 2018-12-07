import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomesPageContainer from './containers/WelcomesPageContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WelcomesPageContainer></WelcomesPageContainer>
        </header>
      </div>
    );
  }
}

export default App;
