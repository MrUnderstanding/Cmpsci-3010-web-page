
import React from 'react';
import { Link } from 'react-router-dom';
function RegistrationForm() {
  const handleRegistration = (event) => {
    event.preventDefault();
    const username = event.target.uname.value;
    const password = event.target.psw.value;

    localStorage.setItem('registeredUser', JSON.stringify({ username, password }));

    window.location.href = 'login';
  };

  return (
    <form onSubmit={handleRegistration}>
      <label htmlFor="uname"><b>Username:</b></label><br />
      <input type="text" id="uname" name="uname" required /><br />

      <label htmlFor="psw"><b>Password:</b></label><br />
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required /><br />

      <label htmlFor="psw-repeat"><b>Repeat Password:</b></label><br />
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required /><br />

      <input type="submit" value="Submit" />
      <input type="reset" value="Reset" />
    
    
       <div id="userInfo"></div>

    </form>
  );
}

export default RegistrationForm;