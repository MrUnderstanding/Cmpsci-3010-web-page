import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import AccountForm from './AccountForm';
import LoginForm from './LoginForm';
import Homepage from './Homepage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/registration" component={RegistrationForm} />
          <Route path="/account" component={AccountForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
