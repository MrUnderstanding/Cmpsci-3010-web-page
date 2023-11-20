import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout() {
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('loggedInUser');
        history.push('/'); // Use history.push for navigation
    };

    return (
        <div>
            <h1>Logout</h1>
            <p>Click the button below to logout:</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
