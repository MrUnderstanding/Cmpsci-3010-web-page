const express = require('express');
const router = express.Router();
const dbClient = require('../db/client'); // Import your PostgreSQL client

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const query = 'SELECT * FROM user_accounts WHERE user_name = $1 AND password = $2';
        const result = await dbClient.query(query, [username, password]);

        if (result.rows.length > 0) {
            res.status(200).json({ message: 'Login successful', user: result.rows[0] });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while processing your request' });
    }
});


module.exports = router;
