const express = require('express');
const colors = require('colors');
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');


const port = process.env.PORT || 5000;
const app = express();

//connect to mongoDB
connectDB();

//fix block cors

app.use(cors());

//graphql endpoint

app.use('/graphql', graphqlHTTP({ 
    schema,
    //set to true
    graphiql: process.env.NODE_ENV === 'development'

}));

//start server

app.listen(port, console.log|(`Server is running on port ${port}`));