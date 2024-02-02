/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/userQueries');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/login', async (req, res) => {

  const user = req.body;
  const sub = req.body.sub;
  console.log("User login route", req.body);


  try {
    // Check if user exists
    const existingUser = await userQueries.getUserBySubId(sub);

    if (existingUser) {
      res.send(existingUser);
    } else {
      // Insert new user if not found
      const newUser = await userQueries.insertUser(user);
      res.send(newUser);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
