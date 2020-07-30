const path = require("path");

module.exports = (app) => {
    app.get("/notes", (req, res) =>
        res.sendFile(path.join(__dirname, "../views/notes.html"))
    );

    // If no matching route is found default to home
    app.get("/", (req, res) =>
        res.sendFile(path.join(__dirname, "../views/index.html"))
    );
};
