import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';




function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const history = useHistory();


    const handleRegistration = (event) => {
        event.preventDefault();

        if (password !== repeatPassword) {
            alert('Passwords do not match');
            return;
        }

        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {

                history.push('/login');
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    };

    const handleReset = () => {
        setUsername('');
        setPassword('');
        setRepeatPassword('');
    };

    return (
        <form onSubmit={handleRegistration} onReset={handleReset}>
            <label htmlFor="uname"><b> Username:</b></label><br />
            <input
                type="text"
                id="uname"
                name="uname"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            /><br />

            <label htmlFor="psw"><b>Password:</b></label><br />
            <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />

            <label htmlFor="psw-repeat"><b>Repeat Password:</b></label><br />
            <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                required
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
            /><br />

            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
        </form>
    );
}

export default RegistrationForm;
