const dotenv = require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const apiRoute = require("routes/api-routes.js");
const htmlRoute = require("routes/html-routes.js");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));

mongoose
	.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	})
	.then(() => {
		//Setup Server after connecting to db
		app.listen(PORT, () => {
			console.log(`listening on PORT ${PORT}, http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error.message);
	});