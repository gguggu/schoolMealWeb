import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;