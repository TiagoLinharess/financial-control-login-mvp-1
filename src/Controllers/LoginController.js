const express = require('express');
const router = express.Router();
const { firebaseApp } = require('../index.js');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const auth = getAuth(firebaseApp);
  
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const response = {
            id: userCredential.user.uid,
            refresh_token: userCredential.user.stsTokenManager.accessToken
        }

        res.status(200).json(response);
    } catch (error) {
        const response = {
            error: error.message.replace("Firebase: ", "")
        }

        res.status(400).json(response);
    }
});

module.exports = router;