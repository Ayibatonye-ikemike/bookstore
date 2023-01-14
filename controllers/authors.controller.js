const AuthorModel = require('../models/authors')
const {validateAddAuthorMiddleWare, validateUpdateAuthorMiddleWare} = require('../validators/authors.validator')


function GetAuthors (req, res) {
    AuthorModel.find()
    .then(author => {
        res.send(author)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })  
}

function GetAuthorsBYId (req, res) {
    const id = req.params.id
    AuthorModel.findById(id)
        .then(author => {
            res.status(200).send(author)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })  
}


function CreateAuthors (req, res) {
    const author = req.body
    author.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    AuthorModel.create(author)
        .then(author => {
            res.status(201).send(author)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}


function UpdateAuthorsById (req, res) {
    const id = req.params.id
    const author = req.body
    author.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    AuthorModel.findByIdAndUpdate(id, author, { new: true })
        .then(newAuthor => {
            res.status(200).send(newAuthor)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}


function DeleteAuthorsById (req, res) {
    const id = req.params.id
    AuthorModel.findByIdAndRemove(id)
        .then(author => {
            res.status(200).send(author)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

module.exports ={
    GetAuthors,
    GetAuthorsBYId,
    CreateAuthors,
    UpdateAuthorsById,
    DeleteAuthorsById
}