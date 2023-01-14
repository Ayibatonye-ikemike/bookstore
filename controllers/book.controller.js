const bookModel = require('../models/books')
const {validateAddBookMiddleWare, validateUpdateBookMiddleWare} = require('../validators/books.validator')


function GetBooks (req, res) {
    bookModel.find()
    .then(books => {
        res.send(books)
    })
    .catch(err => {
        console.log(err)
        res.send(err)
    })  
}

function GetBOOkBYId (req, res) {
    const id = req.params.id
    bookModel.findById(id)
        .then(book => {
            res.status(200).send(book)
        }).catch(err => {
            console.log(err)
            res.status(404).send(err)
        })  
}


function CreateBook (req, res) {
    const book = req.body
    book.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    bookModel.create(book)
        .then(book => {
            res.status(201).send(book)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}


function UpdateBookById (req, res) {
    const id = req.params.id
    const book = req.body
    book.lastUpdateAt = new Date() // set the lastUpdateAt to the current date
    bookModel.findByIdAndUpdate(id, book, { new: true })
        .then(newBook => {
            res.status(200).send(newBook)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}


function DeleteBookById (req, res) {
    const id = req.params.id
    bookModel.findByIdAndRemove(id)
        .then(book => {
            res.status(200).send(book)
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
}

module.exports ={
    GetBooks,
    GetBOOkBYId,
    CreateBook,
    UpdateBookById,
    DeleteBookById
}