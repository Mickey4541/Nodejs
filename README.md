# NodeJs

day1 and 2 in note.

>>>>>>>>>>>day 3:>>>>>>>>>>>>//

problem 1:
html elements haru res.send maa halda ramro vayena.

problem 2:
everytime kehi change hudaa, pheri restart garnu parxa manually(node app.js in terminal)
- (solution: node --watch app.js - 18.10 version above)
- nodemon package is second solution.(npm install nodemon)


- so after installing nodemon, we can do nodemon app.js to run in place of node app.js.

- then after, inside package.json and inside scripts, we write:
"start": "nodemon app.js".

- by doing this, we can do :
npm start 
in place of nodemon app.js.
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>