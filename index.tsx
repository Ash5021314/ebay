const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('connect to db'))
// Rout middleware
app.use('/api/user', require('./routs/auth.tsx'));

app.listen(3000, () => console.log('Server Up and running'));


