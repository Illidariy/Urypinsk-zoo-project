require('@babel/register');
const express = require('express');
const ssr = require('./middleware/ssr');

const app = express();
const mainRouter = require('./routes/mainRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(ssr);
app.use(express.static('public'));

app.use('/', mainRouter);

app.listen(3000);
