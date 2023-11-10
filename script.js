// script.js



function handleRegistration(event) {
  event.preventDefault();

  const username = document.getElementById('uname').value;
  const password = document.getElementById('psw').value;





  // Store user information in local storage
  localStorage.setItem('registeredUser', JSON.stringify({ username, password }));

  window.location.href = 'login.html';
}

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('uname').value;
  const password = document.getElementById('psw').value;

  const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

  if (registeredUser && registeredUser.username === username && registeredUser.password === password) {

    localStorage.setItem('loggedInUser', JSON.stringify({ username }));

    
    window.location.href = 'homepage.html';
  } else {
    alert('Invalid username or password');
  }
}

function handleLogout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = 'homepage.html';
}

function displayLoggedInUserInfo() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (loggedInUser) {
    const userInfoElement = document.getElementById('userInfo');
    userInfoElement.textContent = `Welcome, ${loggedInUser.username}!`;
    userInfoElement.style.display = 'block';
	
	 document.getElementById('registrationLink').style.display = 'none';
      document.getElementById('loginLink').style.display = 'none';
      document.getElementById('accountLink').style.display = 'block';
      document.getElementById('logoutLink').style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', displayLoggedInUserInfo);



function handleLogout() {
  
  localStorage.removeItem('loggedInUser');

 
  window.location.href = 'homepage.html';
}




function handleAccountRegistration(event) {
  event.preventDefault();

  const formData = {
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    address1: document.getElementById('address1').value,
    address2: document.getElementById('address2').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    zip: document.getElementById('zip').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value
  };

  
  localStorage.setItem('accountInfo', JSON.stringify(formData));

  
  window.location.href = 'registration.html';
}


