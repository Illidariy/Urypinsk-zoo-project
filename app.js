require('@babel/register');
const express = require('express');
const ssr = require('./middleware/ssr');
const allAnimalsRoute = require('./routes/allAnimalsRoute');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(express.static('public'));
app.use('/', allAnimalsRoute);

app.listen(3000);
