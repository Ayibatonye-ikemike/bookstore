const { array } = require('joi');
const moogoose = require('mongoose');

//Define a schema
const Schema = moogoose.Schema;

//Define Authors schema
const AuthorSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    
    dob: {
        type: Date,
    },

    country: {
        type: String,
        required: true,
    },

    books: {
        type: Array,
        default: [],
    },
    
    createAt : {
        type: Date,
        default: Date.now
    },
    lastUpdateAt : {
        type: Date,
        default: Date.now
    },
});

// Export the model
module.exports = moogoose.model('authors', AuthorSchema); //collection name is Books. This is the name of the collection in the database