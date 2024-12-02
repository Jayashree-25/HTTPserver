// const express = require("express");
// const app = express();
// const port = 3000;
// app.get("/health-checkup", function (req, res) {
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "Jayashree" || password != "pass") {
//         res.status(403).json({
//             msg: "user doesn't exist",
//         });
//         return;
//     }
//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(411).json({
//             msg: "wrong inputs",
//         });
//         return;
//     }
//     res.send("Your heart is healthy");
// });
// app.listen(port, () => {
//     console.log("Server is running on http://localhost:3000");
// });

//using middleware
const express=require("express");
const app1 = express();
const port1 = 30001;

function userMiddleware(req, res, next){
    if(username != "Jayashree" && password != "pass"){
        res.status(403).json({
            msg: "Incorrect inputs",
        })
    }
    else{
        next(); //calls next func
    }
}
function kidneyMiddleware(req, res, next){
    if(kidneyId != "1" && kidneyId != "2"){
        res.status(403).json({
            msg: "Incorrect inputs",
        })
    }
    else{
        next(); //calls next func
    }
}
app1.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req,res){
    res.send("Your heart is healthy");
})
app1.get("/kidney-checkup", userMiddleware, kidneyMiddleware, function(req, res){
    res.send("Your heart is healthy");
})
app1.get("/heart-checkup", userMiddleware, function(req, res){
    res.send("Your heart is ready");
})
app1.listen(port1, () => {
    console.log("Server is running on http://localhost:3001");
});          

//using app.use()
// app2.use(calculateRequests)
// app2.post("/health-checkup", function(req, res){ 
    //above here.., after /health-checkup no need to mention calculateRequest i.e every route coming after this is going to use this calculateRequest
// })