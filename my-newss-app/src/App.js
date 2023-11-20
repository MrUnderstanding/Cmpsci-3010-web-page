import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountForm from './AccountForm';
import Homepage from './Homepage';
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";
import RegistrationForm from "./RegistrationForm";

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
export default App;