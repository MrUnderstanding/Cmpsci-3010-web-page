import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
function Homepage() {
  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
      const userInfoElement = document.getElementById('userInfo');
      userInfoElement.textContent = `Welcome, ${loggedInUser.username}!`;
      userInfoElement.style.display = 'block';
    }
  }, []);

  return (
    <div>
      <h1>Its Alive</h1>
      <div id="userInfo" style={{ display: 'none' }}></div>


          <img src="It's alive.jpg" alt="Homepage image" />
      

      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/login">Login page</Link>
        <Link to="/account">Account</Link>
        <Link to="/logout">Logout</Link>
      </nav>


      <footer>
        <a href="https://youtube.com/shorts/mjvrDdwsSQw?si=2K-JmP_ZWAQPVI8L">Its Alive video</a>
      </footer>
    
      
    </div>
  );
}

export default Homepage;