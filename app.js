// REQUIRE CORE MODULES
const express = require("express");
const ejs = require("ejs");
const expressLayouts = require("express-ejs-layouts");
const sassMiddleware = require("node-sass-middleware");
const path = require("path");

const app = express();

//PORT
const PORT = process.env.PORT || 5000;

// VIEW ENGINE AND LAYOUT
app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("layout", "./layouts/main.ejs");
app.use(express.urlencoded({extended: true}));

// SASS MIDDLEWARE
app.use(
  sassMiddleware({
    src: __dirname + "/scss",
    dest: __dirname + "/public/css",
    prefix: "/css",
    debug: true,
  })
);

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

//ROUTES MIDDLEWARE
app.use(require("./routes/home"));
app.use(require("./routes/project"));
app.use(require("./routes/service"));

// SERVE HOST
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
