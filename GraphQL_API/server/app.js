const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const mongoose = require('mongoose');

const app = express();

app.use('/graphql',graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(4000,()=>{
  console.log('now listening for request on port 4000');
});

mongoose.connect('mongodb+srv://Greentaylor27:u2devYV7uA7HYlvr@graphql.0v1bg.mongodb.net/?retryWrites=true&w=majority&appName=GraphQL');

mongoose.connection.once('open', () => {
  console.log('Connected to database')
})
