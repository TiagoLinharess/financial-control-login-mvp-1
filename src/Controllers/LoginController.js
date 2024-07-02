const express = require('express');
const router = express.Router();
const { firebaseApp } = require('../index.js');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const auth = getAuth(firebaseApp);
  
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        let response = {
            id: userCredential.user.uid,
            refresh_token: userCredential.user.stsTokenManager.accessToken
        }

        res.json(response);
    } catch (error) {
        res.status(400).send(`Error: ${error.message}`);
    }
});

module.exports = router;