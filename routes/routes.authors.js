const express = require('express')
const AuthorController = require("../controllers/authors.controller")
const {validateAddAuthorMiddleWare, validateUpdateAuthorMiddleWare} = require('../validators/authors.validator')

const AuthorRouter = express.Router()

AuthorRouter.get('/', AuthorController.GetAuthors)

AuthorRouter.get('/:id', AuthorController.GetAuthorsBYId)

AuthorRouter.post('/',validateAddAuthorMiddleWare, AuthorController.CreateAuthors)

AuthorRouter.put('/:id', validateUpdateAuthorMiddleWare, AuthorController.UpdateAuthorsById)

AuthorRouter.delete('/:id', AuthorController.DeleteAuthorsById)


module.exports = AuthorRouter
