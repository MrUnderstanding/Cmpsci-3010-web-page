import React from 'react';
import { Link } from 'react-router-dom';
function AccountForm() {
  const handleAccountRegistration = (event) => {
    event.preventDefault();

    const formData = {
      fname: event.target.fname.value,
      lname: event.target.lname.value,
      address1: event.target.address1.value,
      address2: event.target.address2.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zip: event.target.zip.value,
      phone: event.target.phone.value,
      email: event.target.email.value
    };

    localStorage.setItem('accountInfo', JSON.stringify(formData));

    window.location.href = 'registration'; 
  };

  return (
    <form onSubmit={handleAccountRegistration}>
      
      <label htmlFor="fname"><b>First name:</b></label><br />
      <input type="text" id="fname" name="fname" required /><br />

      <label htmlFor="lname"><b>Last name:</b></label><br />
      <input type="text" id="lname" name="lname" required /><br />

      <label htmlFor="address1"><b>Address 1:</b></label><br />
      <input type="text" id="address1" name="address1" required /><br />

      <label htmlFor="address2"><b>Address 2:</b></label><br />
      <input type="text" id="address2" name="address2" /><br />

      <label htmlFor="city"><b>City:</b></label><br />
      <input type="text" id="city" name="city" required /><br />

      <label htmlFor="state"><b>State:</b></label><br />
      <select name="state" id="state">
        <option value=""></option>
        <option value="Missouri">Missouri</option>
        <option value="Illinois">Illinois</option>
        <option value="Texas">Texas</option>
      </select><br />

      <label htmlFor="zip"><b>Zip Code:</b></label><br />
      <input type="text" id="zip" name="zip" required /><br />

      <label htmlFor="phone"><b>Phone Number:</b></label><br />
      <input type="text" id="phone" name="phone" required /><br />

      <label htmlFor="email"><b>Email:</b></label><br />
      <input type="text" id="email" name="email" required /><br />

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

export default AccountForm;