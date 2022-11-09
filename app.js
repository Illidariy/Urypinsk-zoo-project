require('@babel/register');
const express = require('express');

const configApp = require('./config/serverConfig');

// Import Routes
const mainRouter = require('./routes/mainRoute');
const logRouter = require('./routes/logRoute');
const logOutRouter = require('./routes/logOutRoute');

const app = express();

const PORT = process.env.PORT || 3000;

configApp(app);

// app.use Routes
app.use('/', mainRouter);
app.use('/admin', logRouter);
app.use('/logout', logOutRouter);

app.listen(PORT, () => {
  console.log('Server is working');
});
