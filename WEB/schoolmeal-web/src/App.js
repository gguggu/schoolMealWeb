import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import MainTemplate from './pages/Main/MainTemplate';

const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path="/" component={MainTemplate}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;