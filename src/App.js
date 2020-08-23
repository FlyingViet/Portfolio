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
          <Route exact path="/Blog" component={Blog}/>
          <Route exact path="/Projects" component={Projects}/>
          <Route exact path="/Photography" component={Photography}/>
          <Route exact path="*" component={UnderConstruction}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
