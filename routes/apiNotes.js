const dbJSON = require("../db/db.json");

module.exports = (app) => {
    // GET
    app.get("/api/notes", (req, res) => res.json(dbJSON));

    // POST
    app.post("/api/notes", (req, res) => {
        const lastId = dbJSON.length // if (dbJson.length === true)
            ? Math.max(...dbJSON.map((note) => note.id)) // lastId = the maximum one from the note array based on ids
            : 0; // or the lastId = 0
        const id = lastId + 1; // id cannot be null
        dbJSON.push({ id, ...req.body }); // push id and the rest req.body objects to dbJson
        res.json(dbJSON.slice(-1)); // return the selected element as a new array object ==> new note to the client
    });

    // DELETE
    app.delete("/api/notes/:id", (req, res) => {
        let note = dbJSON.find(({ id }) => id === JSON.parse(req.params.id)); // read all notes from the `db.json` file
        dbJSON.splice(dbJSON.indexOf(note), 1); // remove the note with the given `id` property
        res.json(dbJSON); // rewrite the notes to the `db.json` file
    });
};
