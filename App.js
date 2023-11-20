import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountForm from './my-newss-app/src/AccountForm';

import Homepage from './my-newss-app/src/Homepage';
import LoginForm from "./my-newss-app/src/LoginForm";
import LogoutForm from "./my-newss-app/src/LogoutForm";
import RegistrationForm from "./my-newss-app/src/RegistrationForm";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/account" component={AccountForm} />
          <Route path="/logout" component={LogoutForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/registration" component={RegistrationForm} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));