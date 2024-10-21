// const express = require('express'); //The require function loads the Express module, allowing you to use its features
// const app = express(); //you create an instance of an Express application, this app will handle request and response
// const port = 3000; //This line sets a constant variable port to the number 3000, on which your application will listen for incoming requests. You can change this number if needed.

// app.get('/', function(req, res) { //This line defines a route for your application
//   res.send('Hello World!'); //this line sends the response 'Hello World!'
// });
// app.listen(port, function() { //This line starts the server and tells it to listen for incoming requests on the specified port, this runs when the server is successfully started
//   console.log(`Example app listening on port ${port}`); //${port} syntax is used to insert the value of the port variable into the message
// });
// you can stop it by pressing Ctrl + C

// Creating a http server
// express
// node default library => NO 
const express = require('express');

const app1 = express();

app1.get("/", function(req, res) {
  res.send("hi there");
});

app1.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

