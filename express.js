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

// < ----------- .............. -------------->
// Creating a http server
// express
// node default library => NO 
// const express = require('express');

// const app1 = express();
// function sum(n){
//   let ans = 0;
//   for(let i=1; i<=n; i++){
//     ans = ans + i;
//   }
//   return ans;
// }

// app1.get("/", function(req, res) {
//   const n = req.query.n;
//   const ans = sum(n);
//   res.send("hi your ans is " + ans);
// });

// app1.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });


//complicated one
const express = require('express');

const app2 = express(); //this instance app2 will be used to define routes and middleware
const users = [{    //initialize an array called users
  name: "Rahul",   //one user with an array of kidneys
  kidneys: [{
    healthy: false,  //kidney has a property healthy set to false
  }]
}];

app2.use(express.json()); //allows the server to parse JSON data sent in HTTP requests. 
      //It's necessary for handling JSON in POST requests.

app2.get("/", function (req, res) {
  const rahulKidneys = users[0].kidneys; //retrive kidneys of the user and stores in rahulKidneys variable
  const noOfKidneys = rahulKidneys.length;
  let noOfHealthyKidneys = 0;  //Initializes a counter for healthy kidneys
  for (let i = 0; i < rahulKidneys.length; i++) {
    if (rahulKidneys[i].healthy) {
      //increments no of healthy kidneys
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  //calculates no of unhealthy kidneys
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  //Sends a JSON response back to the client with the no. of kidneys, healthy and unhealthy kidneys
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  })
  console.log(rahulKidneys); //console for debugging purposes
})

app2.post("/", function (req, res) { //post => insert
  //Extracts the isHealthy value from the request body, which indicates whether the new kidney is healthy
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });  //Adds a new kidney object to Rahul's kidneys array with the specified health status
  res.json({  //sends response back to the client
    msg: "Done!",
  })
})

app2.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true; //makes all kidneys healthy
  }
  res.json({
    msg: "Done",
  })
})

//removing all the unhealthy kidneys
app2.delete("/", function (req, res) {
  const newKidneys = []; //Initializes a new array to store only healthy kidneys
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true
      })
    }
  }
  //Replaces the original kidneys array with the newKidneys array, effectively removing unhealthy kidneys.
  users[0].kidneys = newKidneys;
  res.json({
    msg: "Done"
  })
})

app2.listen(3000, () => {
  console.log('server is running');
});
