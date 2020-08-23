import React from 'react';
import {
  Router,
  Route,
  Switch
} from "react-router-dom";
import './App.css';
import { Blog, Home, UnderConstruction, Photography, Projects } from './Pages/index';
import { createBrowserHistory } from "history";
import { Header } from './Components/index';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={history} basename='/'>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Blog" component={Blog}/>
          <Route path="/Projects" component={Projects}/>
          <Route path="/Photography" component={Photography}/>
          <Route path="*" component={UnderConstruction}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
