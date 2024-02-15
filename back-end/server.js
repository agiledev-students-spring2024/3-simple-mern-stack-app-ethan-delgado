#!/usr/bin/env node

// import the express app
const server = require('./app')
require('dotenv').config({ silent: true }) // load environmental variables from a hidden file named .env

// which port to listen for HTTP(S) requests
const port = process.env.PORT || 3000

// call a function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})


const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));


// routing to aboutUs
const aboutUsRoute = require('./models/aboutUs'); // Adjust the path as necessary
app.use('/api', aboutUsRoute);


// a function to stop listening to the port
const close = () => {
  listener.close()
}

// export the close function
module.exports = {
  close: close,
}
