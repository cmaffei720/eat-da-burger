# eat-da-burger

This project creates a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. This follows the MVC design pattern - Node and MySQL are used to query and route data in the app, and Handlebars to generate the HTML.

Eat-Da-Burger is a restaurant app that allows you to input the names of burgers you'd like to see on the menu, and records existing burgers in two sections - uneaten, and eaten.



App Setup

package.json file created from running npm init from the command line.
Installed the Express npm package: npm install express.
Created a server.js file.
Installed the Handlebars npm package: npm install express-handlebars.
Installed MySQL npm package: npm install mysql.
Required the following npm packages inside of the server.js file:
express


DB Setup

Inside of the burger directory, find a folder named db.
In the db folder, find a file named schema.sql with SQL queries this file that do the following:

Create the burgers_db.
Switch to or use the burgers_db.

A burgers table is created with these fields:

id: an auto incrementing int that serves as the primary key.
name: a string, the name of the burger
devoured: a boolean for whether it has been eaten or not. Default value is FALSE

Still in the db folder, find the seeds.sql file with insert queries to populate the burgers table.
The schema.sql and seeds.sql files were run in the mysql server from the command line



Config Setup

Inside the burger directory, see a folder named config.
Inside the connection.js file, code connects Node to MySQL.
Connection is exported.

orm.js file: requires connection.js
In the orm.js file, the below methods exist:
all()
create()
update()
delete()




Model setup

Models folder:
In models, see the burger.js file.
orm.js is imported into burger.js
Also inside burger.js, code will call the ORM functions using burger specific input for the ORM.
Module.export in place at the end of the burger.js file.




Controller setup

Inside of the burger directory, find a folder named controllers.
In controllers,th the burgersController.js file is created.

Inside the burgersController.js file, the following are imported:
Express
burger.js

A router is created for the app, and exported at the end of the file.




View setup

The folder named views: contains index.handlebars file, and layouts directory which contains main.handlebars
The main.handlebars file is setup so it's able to be used by Handlebars.
The index.handlebars has the template that Handlebars can render onto.




Directory structure:
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgersController.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│    ├──css
│    │   └── style.css
│    └──js
│        └── burgers.js
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars