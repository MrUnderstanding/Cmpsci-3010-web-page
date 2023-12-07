import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AccountForm() {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: ''
    });

    const [submitMessage, setSubmitMessage] = useState('');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAccountRegistration = async (event) => {
        event.preventDefault();

        try {
            const userId = 1; // Replace with the appropriate user ID
            const response = await fetch(`http://localhost:3001/account/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitMessage('Thank you for updating your account!');
                setFormData({
                    fname: '',
                    lname: '',
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    zip: '',
                    phone: '',
                    email: ''
                });
            } else {
                console.error('Account data update failed');
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    };

    const handleReset = () => {
        setFormData({
            fname: '',
            lname: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: ''
        });
        setSubmitMessage('');
    };

    return (
        <form onSubmit={handleAccountRegistration}>
            <label htmlFor="fname"><b>First name:</b></label><br />
            <input
                type="text"
                id="fname"
                name="fname"
                required
                value={formData.fname}
                onChange={handleInputChange}
            /><br />

            <label htmlFor="lname"><b>Last name:</b></label><br />
            <input
                type="text"
                id="lname"
                name="lname"
                required
                value={formData.lname}
                onChange={handleInputChange}
            /><br />



            <label htmlFor="address1"><b>Address 1:</b></label><br />
            <input
                type="text"
                id="address1"
                name="address1"
                required
                value={formData.address1}
                onChange={handleInputChange}
            /><br />


            <label htmlFor="address2"><b>Address 2:</b></label><br />
            <input
                type="text"
                id="address2"
                name="address2"
                value={formData.address2}
                onChange={handleInputChange}
            /><br />


            <label htmlFor="city"><b>City:</b></label><br />
            <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
            /><br />

            <label htmlFor="state"><b>state:</b></label><br />
            <input
                type="text"
                id="state"
                name="state"
                required
                value={formData.state}
                onChange={handleInputChange}
            /><br />


            <label htmlFor="zip"><b>Zip Code:</b></label><br />
            <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleInputChange}
                required
            /><br />

            <label htmlFor="phone"><b>Phone Number:</b></label><br />
            <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
            /><br />

            <label htmlFor="email"><b>Email:</b></label><br />
            <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
            /><br />
            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" onClick={handleReset} />

            {submitMessage && <div>{submitMessage}</div>}

            <nav>
                <Link to="/">Homepage</Link>
                <Link to="/logout">Logout</Link>
            </nav>
        </form>
    );
}

export default AccountForm;
