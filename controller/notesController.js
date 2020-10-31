const notesSchema = require("../model/notes");


let postNotes = async (req, res) => {
    try {
        const { notes } = req.body
        
        let newNote = new notesSchema({ notes })
        let response = await newNote.save()
        res.json(response)
    }
    catch (err) {
        console.error(err)
    }

}

let getNotes = async (req, res) => {
    try {
        
        let response = await notesSchema.find()
        res.json(response)
        
    }
    catch (err) {
        console.error(err)
    }
}


module.exports = { postNotes, getNotes };