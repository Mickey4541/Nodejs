﻿# NodeJs

# Day 1 and Day 2 in notes folder::



# Day 3 :::::::::::::::::::::::::::::

>problem 1:
everytime kehi change hudaa, pheri restart garnu parxa manually(node app.js in terminal)
- solution: 
- (node --watch app.js - 18.10 version above)
- nodemon package is second solution.(npm install nodemon)


- so after installing nodemon, we can do nodemon app.js to run in place of node app.js.

- then after, inside package.json and inside scripts, we write:
"start": "nodemon app.js".

- by doing this, we can do :
npm start 
in place of nodemon app.js.

- start xa vaney -> npm start
and start vanda aaru xa vaney like start ko thau maa razan xa vaney -> npm run razan

>problem 2:
html elements haru res.send maa halda ramro vayena.
- Solution:
- (view/tamplate engine -> laravel(blade), node(ejs, handlebar, pug) )

- we use ejs.(- npm install ejs)(ejs = embedded jsvascript)

- To use ejs now, we have to tell node to do all things:
    Inside app.js, app.set("view engine", "ejs") after const app = express()


- after this, we have to make a folder named views and inside that views, make a file home.ejs. here, we can write html code just like index.html. Make sure to make folder with name "views".


- To render file of views(home.ejs) inside app.js:

    app.get('/', (req, res)=> {
    res.render("home.ejs")//to render file named home.ejs inside views.


- Then run, npm start.(localhost:3000/)


- make index.html in main folder. We have index.html and home.ejs. HEre, index.html is clientside rendering and home.ejs is serverside rendering.

- Thorey  and details of CSR and SSR.


# Day 4 ::::::::::::
CMS project Start: See in another repo.
