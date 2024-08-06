const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    id:{
        type:String,
        unique:true,
        required: true
    },
    userid:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    contents:{
        type:String,
    },
    dateAdded:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('notes',notesSchema);