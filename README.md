# CS465-SNHU
CS-465-H7504 Full Stack Development I 22EW1
- Change Log Module2 09112022
- Change the foler structure to MVC architecture by creating a app_server folder and controllers and models folders. Then moved the routes and views folders into app_server.

- updated the views and routes folder location by updating in the code in app.js.
from:
app.set('views', path.join(__dirname, 'views'));
to:
app.set('views', path.join(__dirname, 'app_server', 'views'));
and
from:
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
to:
const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');

NOTE: Starting changed from var to const variables to conform to ES2015 standards.
const variables defined with const can’t be changed at a later point in the code.


- Splitting controllers from routes
In .app_server/routes/index.js I defined the anonymous function from the route definition as a named function.
 Then pass the name of this function through as the callback in the route definition.

from:
/* GET homepage. */
router.get('/', function(req, res) {          
  res.render('index', { title: 'Express' });   
});

to:
const homepageController = (req, res) => {      
  res.render('index', { title: 'Express' });    
};                                              
/* GET homepage. */
router.get('/', homepageController);

- Set up up the homepage controller in app_server/controllers/main.js
create main.js then Created an index function with:
const index = (req, res) => { 

I incldued the controller for the homepage with:
 res.render('index', { title: 'Express' });
};

and exposed the index function as a method with:
module.exports = {
index
};

- Inside .app_server/routes/index.js updated:
var express = require('express');
var router = express.Router();
to:
const express = require('express');
const router = express.Router();
to confrom with ES2015 standards.

changed:
const homepageController = (req, res) => {
    res.render('index', { title: 'Express' }); 
};

to:
const ctrlMain = require('../controllers/main');
to requrie the main controller file.
updated:
router.get('/', homepageController);
to:
router.get('/', ctrlMain.index); 
this references the index method of the controllers in the route definition.

- Created a controller for the Travlr page in .app_server/controllers/travel.js

- Created a route for the Travlr page
in .app_server/routes/travel.js

- in the app.js file insertd the new app_server routing for travel.js with:
const travelRouter = require('./app_server/routes/travel');
and:
app.use('/tavel', travelRouter);

- created tavel.hbs inside of views
NOTE - hbs denotes its a Handlebars view.

- Created a partials folder inside views. within this created header.hbs. moved the header from travel.hbs and replace the entire header “div tag with a single-line Handlebars instruction to include the new partial file.

- created a footer partial page inside partials names partials.hbs

- created a layouts folder under views and moved layout.hbs into layouts. 

-edited app.js to register the new partials folder.
