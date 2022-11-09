require('@babel/register');
const express = require('express');

const configApp = require('./config/serverConfig');

// Import Routes

const app = express();

const PORT = process.env.PORT || 3000;

configApp(app);

// app.use Routes

app.listen(PORT, () => {
  console.log('Server is working');
});
