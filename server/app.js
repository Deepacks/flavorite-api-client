const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const logger = require("morgan");
const cors = require("./cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const routes = require("./routes");
require("dotenv").config();

const app = express();

// -------------- DB CONNECTION --------------

mongoose
  .connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("AWS database connection succesful"));
mongoose.set("useFindAndModify", false);

// -------------- SERVE REACT --------------

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use((req, res, next) => {
  if (req.url.includes("api")) {
    next();
  } else {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  }
});

// -------------- GENERAL SETUP --------------

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

// -------------- PASSPORT CONFIG --------------

require("./config/passport")(passport);

// -------------- SESSION SETUP --------------

app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(cookieParser(process.env.SECRET));

// -------------- PASSPORT AUTH --------------

app.use(passport.initialize());
app.use(passport.session());

// -------------- ROUTES --------------

app.use(routes);

// -------------- SERVER --------------

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port " + process.env.PORT);
});
