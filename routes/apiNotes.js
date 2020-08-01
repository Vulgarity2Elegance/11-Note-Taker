const dbJSON = require("../db/db.json");

module.exports = (app) => {
    // GET
    app.get("/api/notes", (req, res) => res.json(dbJSON));

    // POST
    app.post("/api/notes", (req, res) => {
        dbJSON.push(req.body); // save new note to request body
        res.json(true); // return the new note to the client
    });

    // DELETE
    app.delete("/api/notes/:id", (req, res) => {
        const id = req.params.id; // give each note a unique `id` when it's saved
        dbJSON.splice(id, 1); // use splice() to remove elements without leaving "holes" in the array
        res.json(dbJSON); // rewrite the notes to the `db.json` file
    });
};
