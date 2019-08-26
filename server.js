// 1 npm init -y kickstart the app with default settings
// 2 npm install the dependencies (express, hbs ...)
// 3 if git init ... add a .gitignore file to irgnore node_module/ folder
// 4 require exress in you mains server file
// 5 execute express to get an app out of it
// 6 app.listen(port) to kickstart server listening
// 7 setup a route to response to client requests
// 8 ... nodemon the main file !!!

const express = require("express");  // import express
const app = express(); // declare a varible to execute the express function
// line 10 and 11 are also: const app = require("express")();
const hbs = require("hbs");  // to import the hbs = handlebars
const path = require("path"); // to import the path methode, to create easier a path to the correct files

app.use(express.static(path.join(__dirname, "public"))); // make the folder 'public' to the root folder of this file

app.set("views", path.join(__dirname, "views")); // set views (first in this line to the folder called views)
app.set("view engine", "hbs"); 

hbs.registerPartials(path.join(__dirname, "/views/partials")); // set the path for the partials folder
// registerPartials is the method and is impossible to change as a name

app.get("/", (req, res) => {
    const data = { // at this point you can input objects, arrays for using on the website
        users: ["foo", "bar", "baz"]
    };
    res.render("index", data);
});

app.get("/about", (req,res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

const listener = app.listen(4000, () => {
    console.log(`server is up @ http://localhost: ${listener.address().port}`);
}); // set the port for the website