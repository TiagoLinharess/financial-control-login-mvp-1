const express = require('express');
const router = express.Router();
const { firebaseApp } = require('../index.js');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

router.post('/register', async (req, res) => {
    const { email, password } = req.body
    const auth = getAuth(firebaseApp);
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      res.status(201).send(`User registered with email: ${userCredential.user.email}`);
    } catch (error) {
      res.status(400).send(`Error: ${error.message}`);
    }
});

module.exports = router;