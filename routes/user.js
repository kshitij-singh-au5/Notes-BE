var express = require('express');
var router = express.Router();
var {postNotes, getNotes} = require("../controller/notesController");


router.post('/',postNotes)
router.get('/data',getNotes)


module.exports = router;
