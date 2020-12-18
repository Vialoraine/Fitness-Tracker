// dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

// define port
const PORT = process.env.PORT || 3000;

// initialize app with express
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

// creating connection to mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => console.log(`Connected on PORT ${PORT}`));