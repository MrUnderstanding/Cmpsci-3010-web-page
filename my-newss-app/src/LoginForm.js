import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm({ handleLogin }) {
    const history = useHistory();

    const loginUser = async (event) => {
        event.preventDefault();
        const username = event.target.uname.value;
        const password = event.target.psw.value;

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const user = await response.json();
                localStorage.setItem('loggedInUser', JSON.stringify(user));
                handleLogin(user); // Update the logged-in user state in the parent component
                history.push('');
            } else {
                console.error('Login failed');
                alert('Login failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while trying to login.');
        }
    };

    return (
        <form onSubmit={loginUser}>
            <h1>Username</h1>
            <input type="text" id="uname" name="uname" required />
            <h2>Password</h2>
            <input type="password" id="psw" name="psw" required />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default LoginForm;
