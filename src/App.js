import React from 'react';
import {
  Router,
  Route
} from "react-router-dom";
import './App.css';
import { Blog, Home } from './Pages/index';
import { createBrowserHistory } from "history";
import { Header } from './Components/index';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/Blog" component={Blog}/>
      </Router>
      
    </div>
  );
}

export default App;
