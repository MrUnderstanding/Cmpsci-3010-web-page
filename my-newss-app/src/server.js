const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;
const path = require('path');
const bodyParser = require('body-parser');
const {request, response} = require("express");
const dbClient = require('../db/client');
const authRoutes = require('./authRoutes');
const {post} = require("./login");







app.use(cors());
app.use(express.json());

//app.use('/auth', authRoutes);


app.use(cors({
    origin: 'http://localhost:3001',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

let users = [
    { id: 1, username: 'user1', password: 'pass1' },
    { id: 2, username: 'user2', password: 'pass2' },

];

app.use(express.static(path.join(__dirname, 'build')));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        const result = await dbClient.query('SELECT * FROM user_accounts WHERE user_name = $1 AND password = $2', [username, password]);

        if (result.rows.length > 0) {
            res.status(200).json({ message: 'Login successful', user: result.rows[0] });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

    
        const existingUser = await dbClient.query('SELECT * FROM user_accounts WHERE user_name = $1', [username]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const newUser = await dbClient.query('INSERT INTO user_accounts (user_name, password) VALUES ($1, $2) RETURNING *', [username, password]);
        res.status(201).json({ message: 'Registration successful', user: newUser.rows[0] });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});



app.put('/account/:id', async (req, res) => {
    const userId = req.params.id;
    const { fname, lname, address1, address2, city, state, zip, phone, email } = req.body;

    try {

        const userDetails = await dbClient.query('SELECT * FROM user_account_details WHERE user_id = $1', [userId]);

        if (userDetails.rows.length === 0) {

            const insertQuery = `
                INSERT INTO user_account_details (user_id, first_name, last_name, address_1, address_2, city, state, zip_code, phone_number, email)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
                RETURNING *
            `;
            const insertResult = await dbClient.query(insertQuery, [userId, fname, lname, address1, address2, city, state, zip, phone, email]);
            res.status(201).json({ message: 'User details added', userDetails: insertResult.rows[0] });
        } else {

            const updateQuery = `
                UPDATE user_account_details
                SET first_name = $2, last_name = $3, address_1 = $4, address_2 = $5, city = $6, state = $7, zip_code = $8, phone_number = $9, email = $10
                WHERE user_id = $1
                RETURNING *
            `;
            const updateResult = await dbClient.query(updateQuery, [userId, fname, lname, address1, address2, city, state, zip, phone, email]);
            res.status(200).json({ message: 'User details updated', updatedUserDetails: updateResult.rows[0] });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while processing your request' });
    }
});
app.get('/users', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM users'); // Replace 'users' with your table name
        res.json(result.rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
