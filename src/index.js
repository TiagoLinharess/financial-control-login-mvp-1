const express = require('express');
const app = express();
const port = 3000;

const fetch = require('node-fetch');
globalThis.fetch = fetch;

const registerRoute = require('./Controllers/RegisterController');
const loginRoute = require('./Controllers/LoginController');
const sessionRoute = require('./Controllers/VerifySession');

const { initializeApp } = require('firebase/app');
const firebaseConfig = {
    apiKey: "AIzaSyB3yOiJ1tRJRKhALN-doSIhTSHplYnLbI0",
    authDomain: "financial-control-login.firebaseapp.com",
    projectId: "financial-control-login",
    storageBucket: "financial-control-login.appspot.com",
    messagingSenderId: "973895580655",
    appId: "1:973895580655:web:e29a78f4c375bd6807941a",
    measurementId: "G-FG3FXT9XGP"
};
const firebaseApp = initializeApp(firebaseConfig);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', registerRoute);
app.use('/', loginRoute);
app.use('/', sessionRoute);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = firebaseApp;