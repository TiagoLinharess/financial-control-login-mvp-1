const express = require('express');
const router = express.Router();
const { firebaseApp } = require('../index.js');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

router.post('/register', async (req, res) => {
    const { email, password } = req.body
    const auth = getAuth(firebaseApp);
  
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const response = {
            message: 'success'
        }

        res.status(201).json(response);
    } catch (error) {
        const response = {
          error: error.message.replace("Firebase: ", "")
        }

        res.status(400).send(response);
    }
});

module.exports = router;