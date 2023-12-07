import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountForm from './AccountForm';
import Homepage from './Homepage';
import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';
import RegistrationForm from './RegistrationForm';

const App = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (user) => {
        setLoggedInUser(user);
    };

    return (
        <Router>
            <div>
                {/* Pass handleLogin and loggedInUser as props to Homepage */}
                <Switch>
                    <Route path="/account" component={AccountForm} />
                    <Route path="/logout" component={LogoutForm} />
                    <Route path="/login">
                        {/* Pass handleLogin function as a prop to the LoginForm */}
                        <LoginForm handleLogin={handleLogin} />
                    </Route>
                    <Route path="/registration" component={RegistrationForm} />
                    <Route exact path="/">

                        <Homepage loggedInUser={loggedInUser} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
