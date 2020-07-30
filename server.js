// DEPENDENCIES
const express = require("express");
const path = require("path");

// EXPRESS CONFIGURATION
const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + "/public")));

// ROUTER
require("./routes/htmlNotes")(app);
// require("./routes/apiNotes")(app);

// LISTENER
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});
