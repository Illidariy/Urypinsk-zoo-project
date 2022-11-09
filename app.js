require('@babel/register');
const express = require('express');










const app = express();


const configApp = require('./config/serverConfig');

// Import Routes
const mainRouter = require('./routes/mainRoute');
const logRouter = require('./routes/logRoute');
const logOutRouter = require('./routes/logOutRoute');
const tariffRout = require('./routes/tariffRout');
const allAnimalsRoute = require('./routes/allAnimalsRoute');


const app = express();


const PORT = process.env.PORT || 3000;

configApp(app);

// app.use Routes
app.use('/', mainRouter);
app.use('/admin', logRouter);
app.use('/logout', logOutRouter);
app.use('/animals', allAnimalsRoute);
app.use('/tariffs', tariffRout);

app.listen(PORT, () => {
  console.log('Server is working');
});
