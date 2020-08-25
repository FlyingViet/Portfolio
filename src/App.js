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
import useSWR from 'swr'

const history = createBrowserHistory();

function App() {
  const fetcher = url => fetch(url, {method: "GET"}).then(r => r.json()).then(json => json.body.Contents);

  const { data } = useSWR('https://82ada8z9md.execute-api.us-east-2.amazonaws.com/prod/api/photos', fetcher);

  var images = [];
  if(data){
      data.forEach(image => {
          images.push({
              src: 'https://d1bycl3dmnt2ou.cloudfront.net/' + image.Key.split(' ').join('+'),
              width: 4,
              height: 3
          })
      })
  };

  return (
    <div className="App">
      <Router history={history} basename='/'>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Blog" component={Blog}/>
          <Route exact path="/Projects" component={Projects}/>
          <Route exact path="/Photography" component={() => <Photography images={images}/>}/>
          <Route exact path="*" component={UnderConstruction}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
