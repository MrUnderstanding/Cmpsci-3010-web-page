// const express = require('express');
// const router = express.Router();
// const dbClient = require('../db/client');
//
// router.get('/account/:id', async (req, res) => {
//
//     try {
//         const userId = req.params.id;
//
//         const userDetails = await dbClient.query('SELECT * FROM user_account_details WHERE user_id = $1', [userId]);
//
//         if (userDetails.rows.length === 0) {
//             return res.status(204).json({ message: 'No data available for this user' });
//         }
//         res.status(200).json({ message: 'User account details', userDetails: userDetails.rows });
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// });
// router.put('/account/:id', async (req, res) => {
//     const userId = req.params.id;
//     const { fname, lname, address1, address2, city, state, zip, phone, email } = req.body;
//
//     try {
//         const query = `
//             UPDATE user_account_details
//             SET fname = $1, lname = $2, address1 = $3, address2 = $4, city = $5, state = $6, zip = $7, phone = $8, email = $9
//             WHERE user_id = $10
//             RETURNING *
//         `;
//
//         const result = await dbClient.query(query, [fname, lname, address1, address2, city, state, zip, phone, email, userId]);
//
//         if (result.rows.length > 0) {
//             res.status(200).json({ message: 'User details updated', updatedUserDetails: result.rows[0] });
//         } else {
//             res.status(404).json({ message: 'No user details found for the provided ID' });
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         res.status(500).json({ message: 'An error occurred while processing your request' });
//     }
// });
// module.exports = router;
