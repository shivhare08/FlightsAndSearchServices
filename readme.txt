Body-parser converts/parses incoming request body data into something your Express application can work with easily.

Client
   ↓
HTTP Request
   ↓
Body: {"name":"Shashank","age":24}
   ↓
express.json()
   ↓
JavaScript object
   ↓
req.body

The request body arrives as data that Express needs to parse into a JavaScript object.


app.use(express.json());
"Express, whenever you receive JSON data in a request body, parse it so that I can access it through req.body."

Then:

app.post("/user", (req, res) => {
    console.log(req.body);
});

You can get:

{
    name: "Shashank",
    age: 24
}


const bodyParser = require("body-parser");
app.use(bodyParser.json());
-----------------------------------------------------------------
console.log(
process
process.env
process.env.port
process.argv
process.pid
process.cwd()
process.version)

-------------------------------------------------------------------------------------
| Normal function               | Async function                 |
| ----------------------------- | ------------------------------ |
| Returns normal value          | Always returns Promise         |
| Cannot use `await` inside it  | Can use `await`                |
| Suitable for synchronous work | Suitable for asynchronous work |
| `return data` → data          | `return data` → Promise<data>  |


Use async when your function needs to perform/handle Promise-based asynchronous operations, 
especially when you want to use await.
We use async for functions that deal with operations whose result is available later, 
usually because they involve I/O or another asynchronous task.

-----------------------------------------------------------------------------------------------

1. mysql2 = connects Node.js to MySQL
2. sequelize → ORM (Sequelize is the ORM) ORM is a technique that lets you work with a relational database 
using programming-language objects instead of writing SQL for every operation. It lets you work with MySQL using JavaScript instead of writing SQL for everything. (Object-Relational Mapping.)
3. sequelize-cli → command-line tool
This one is different.
sequelize-cli helps you manage your Sequelize project from the terminal.

-------------------------------------------------------------------------------------------------
JavaScript is the language; Node.js is a runtime environment that allows JavaScript to run outside the browser,
making it possible to build backend applications with JavaScript.

-------------------------------------------------------------------------------------------------
-npm i sequelize
-npx sequelize init - it creates migration , config(config.json) - we put pass and username of our db , seeders , models(index.js) folder
-Once you have added your db config (inside src folder) , go to the src folder from your terminal and execute
-npx sequelize db:create - to create db

---------------------------------------------------------------------------------------------------------

A flights belongs to an airoplane but one airoplane can be used in multiple flights
A city has many airports but one airport belongs to a city
One airport can have many flights , but a flights belongs to one airport


https://www.npmjs.com/package/sequelize-cli

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file      [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file     


  | Change                | New migration? |
| --------------------- | -------------- |
| Add column            | ✅ Yes          |
| Remove column         | ✅ Yes          |
| Change column type    | ✅ Yes          |
| Rename column         | ✅ Yes          |
| Create new table      | ✅ Yes          |
| Delete table          | ✅ Yes          |
| Add/remove constraint | ✅ Yes          |




1)npx sequelize model:generate --name City --attributes name:String 
to create city.js model file and migration with more details

2)npx sequelize db:migrate
we do need to run this command to create the actual table in MYSQL


You run:

npx sequelize model:generate --name City --attributes name:String
                    |
                    ↓
          Generates two things
             /          \
            ↓            ↓
        Model.js      Migration.js
           |              |
           ↓              ↓
     Application       Database
     representation    instructions

Model = blueprint your application uses
Migration = history/instructions for building or changing the real database.
------------------------------------------------------------------------------------------------------
For index file in models - Central place for all the models

models/
│
├── index.js
├── city.js
├── department.js
└── user.js

Each file defines one model:

city.js        → City model
department.js  → Department model
user.js        → User model

But your application needs a way to load all of them together. That's where:

models/index.js


const City = require('./city');
const Department = require('./department');

module.exports = {
    City,
    Department
};