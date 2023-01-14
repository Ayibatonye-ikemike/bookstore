const express = require('express')
const bookController = require("../controllers/book.controller")
const {validateAddBookMiddleWare, validateUpdateBookMiddleWare} = require('../validators/books.validator')

const bookRouter = express.Router()

bookRouter.get('/', bookController.GetBooks)

bookRouter.get('/:id', bookController.GetBOOkBYId)

bookRouter.post('/',validateAddBookMiddleWare, bookController.CreateBook)

bookRouter.put('/:id', validateUpdateBookMiddleWare, bookController.UpdateBookById)

bookRouter.delete('/:id', bookController.DeleteBookById)


module.exports = bookRouter
