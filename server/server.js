const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 5000

app.use(bodyParser.json());
app.get("/api",(req,res) => {
    console.log("req.body")
    res.json({User})
})
app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.listen(port,() => {console.log("Server is running on port 5000")})