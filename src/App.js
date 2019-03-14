import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from 'src/router/index';
import ErrorBoundary from 'src/components/ErrorBoundary';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
