const express = require('express');
const cor = require('cors');
const path = require('path');
const app = express();
const port = 8800;

const dotenv = require('dotenv')
dotenv.config()
const db = require('./src/config/db');

// Connect to db//
db.connect();

app.use(express.urlencoded({
  extended:true
}));

app.use(express.json());
app.use(cor());

//// Router /////
const userRoute = require('./routers/userRoute');
const AuthRoute = require('./routers/AuthRoute')

//// API ////
app.use('/api/users', userRoute);
app.use('/api/auth', AuthRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
