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
// const express = require('express');

// const app1 = express();


// app1.get("/", function(req, res) {

//   res.send("hi");
// });

// app1.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });
const express = require('express');

const app2 = express();
const users = [{
  name: "Rahul",
  kidneys: [{
    healthy: false,
  }]
}];

app2.use(express.json());

app2.get("/", function (req, res) {
  const rahulKidneys = users[0].kidneys;
  const noOfKidneys = rahulKidneys.length;
  let noOfHealthyKidneys = 0;
  for (let i = 0; i < rahulKidneys.length; i++) {
    if (rahulKidneys[i].healthy) {
      noOfHealthyKidneys = noOfHealthyKidneys + 1;
    }
  }
  const noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys;
  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys,
  })
  console.log(rahulKidneys);
})

app2.post("/", function (req, res) { //post => insert
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
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
  const newKidneys = [];
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (users[0].kidneys[i].healthy) {
      newKidneys.push({
        healthy: true
      })
    }
  }
  users[0].kidneys = newKidneys;
  res.json({
    msg: "Done"
  })
})

app2.listen(3000, () => {
  console.log('server is running');
});
