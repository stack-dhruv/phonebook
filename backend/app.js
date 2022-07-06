var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

const DATABASE_URI =
  "mongodb+srv://user:user@login-app.xldtd.mongodb.net/?retryWrites=true&w=majority";
const PORT = 27017;

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var personRouter = require("./routes/person");

var app = express();

// mongoose connection
mongoose
  .connect(DATABASE_URI)
  .then(() => console.log("Database is successfully connected"))
  .catch((e) => console.log(e));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", personRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
app.listen(PORT, () => {
  console.log(`Web server is live at the ${PORT}`);
});
