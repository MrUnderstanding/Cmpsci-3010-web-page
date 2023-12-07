import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    console.log(loggedInUser);
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('loggedInUser'));
        if (user) {
            setLoggedInUser(user);
        }


    }, []);




    return (
        <div>
            <h1>Its Alive</h1>

            <div>

                {loggedInUser ? (
                    <p>Welcome, {loggedInUser.username}!</p>
                ) : (
                    <p>Welcome! Please log in.</p>
                )}
            </div>

            <nav>
                <Link to="/">Homepage</Link>
                {!loggedInUser && <Link to="/registration">Registration</Link>}
                {!loggedInUser && <Link to="/login">Login</Link>}
                {loggedInUser && <Link to="/account">Account</Link>}
                {loggedInUser && <Link to="/logout">Logout</Link>}
            </nav>

            <footer>
                <a href="https://youtube.com/shorts/mjvrDdwsSQw?si=2K-JmP_ZWAQPVI8L">Its Alive video</a>
            </footer>
        </div>
    );
}

export default Homepage;
