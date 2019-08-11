import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainPage, NotFoundPage } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
};

export default App;