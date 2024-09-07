const express = require("express")//requiring express package
const app = express()//storing it in app, app vanney variable throughout use garxam hami


//here, we tell node : maa ejs use gardai xu, k k chhiney ho sabai set gar hai vaneko.
app.set("view engine", "ejs")

// app.get('/', (req, res)=> {
//     res.send("hello world");
// })



//in terminal first run node app.js and in browser localhost:3000/ and enter
app.get('/', (req, res)=> {
    res.render("home.ejs")//to render file named home.ejs inside views.


app.get('/about', (req, res)=> {
    res.render("about.ejs");
})


app.get('/contact', (req, res)=> {
    res.render("contact")//.ejs na lekhdaa ni hunxa.
})

app.get('/service', (req, res)=> {
    res.render("service")//.ejs na lekhdaa ni hunxa.
})



})
app.get('/request', (req, res)=> {
    console.log(req)
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