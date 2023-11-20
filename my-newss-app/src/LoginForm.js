import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function LoginForm() {
    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        const username = event.target.uname.value;
        const password = event.target.psw.value;

        const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

        if (registeredUser && registeredUser.username === username && registeredUser.password === password) {
            localStorage.setItem('loggedInUser', JSON.stringify({ username }));
            history.push('/'); // Use history.push for navigation
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label htmlFor="uname"><b>Username:</b></label><br />
            <input type="text" id="uname" name="uname" required /><br />

            <label htmlFor="psw"><b>Password:</b></label><br />
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required /><br />

            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />

            <div id="userInfo"></div>

            <nav>
                <Link to="/">Homepage</Link>
                <Link to="/registration">Registration</Link>
                <Link to="/login">Login page</Link>
                <Link to="/account">Account</Link>
                <Link to="/logout">Logout</Link>
            </nav>
        </form>
    );
}

export default LoginForm;
