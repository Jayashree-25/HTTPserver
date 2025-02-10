const express = require("express");
const jwt = require("jsonwebtoken"); //new library
const jwtPassword = "123456";
const app = express();
const port = 4000;
app.use(express.json());

const ALL_USERS = [
    {
        username: "jayashree@gmail.com",
        password: "125",
        name: "jayashree das",
    },{
        username: "shree@gmail.com",
        password: "125",
        name: "bhagyashree singh"
    },{
        username: "priya@gmail.com",
        password: "125",
        name: "priya kumari"
    },
];

function userExists(username, password){
    let userExists = false;
    for(let i = 0; i<ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "user doesn't exist"
        })
    }

    var token = jwt.sign({username: username }, jwtPassword);
    return res.json({
        token,
    });
});

app.get("/users", function(req, res){
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    res.json({
        users: ALL_USERS.filter(function(value){
    //here i filtered the user who do not have username same as mine
            if(value.username == username){ 
                return false
            }else{
                return true;
            }
        })
    })
});
app.listen(port, () => {
    console.log("Server running on port 4000");
  });