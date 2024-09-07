const express = require("express")//requiring express package
const app = express()//storing it in app, app vanney variable throughout use garxam hami


//here, we tell node : maa ejs use gardai xu, k k chhiney ho sabai set gar hai vaneko.
app.set("view engine", "ejs")

// app.get('/', (req, res)=> {
//     res.send("hello world");
// })


app.get('/about', (req, res)=> {
    res.send("This is a About Page");
})

//in terminal first run node app.js and in browser localhost:3000/ and enter
app.get('/', (req, res)=> {
    res.send("This is homepage.")
})
app.get('/request', (req, res)=> {
    console.log(req)
})


//we can do html also::
//localhost:3000/html in browser after running in terminal.
app.get('/html', (req, res)=> {
    res.send("<h1>This is heading.</h1>")
})

// There are likely 1-65555 ports.
// 443 = HTTPS
// 80 = http
//22 = ftp
//1- 1100 = internal system ley use garxa
// 1100-65555 = services and projects ley use garako hunxa
app.listen(3000,() => {
    console.log("NodeJs project has started on port 3000");
    
})