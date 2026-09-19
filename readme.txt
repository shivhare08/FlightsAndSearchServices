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
