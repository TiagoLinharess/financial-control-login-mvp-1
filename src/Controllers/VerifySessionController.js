const express = require('express');
const router = express.Router();
const adminConfig = require('../../admin-key.json');
const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(adminConfig)
});

router.post('/verify-session', async (req, res) => {
    const { refreshToken } = req.body;

    try {
        const decodedToken = await admin.auth().verifyIdToken(refreshToken, true);
        res.status(200).json({ is_valid: true });
    } catch (error) {
        res.status(400).json({ is_valid: false });
    }
});

module.exports = router;