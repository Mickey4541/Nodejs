# NodeJs

# Day 1 and Day 2 in notes folder::



# Day 3 :

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

- we use ejs.(- npm install ejs)

- To use ejs now, we have to tell node to do all things:
    app.set("view engine", "ejs") after const app = express()

- 



