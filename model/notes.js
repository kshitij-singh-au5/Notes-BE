const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
    notes: { type : String }
});

module.exports = mongoose.model("notes", notesSchema)