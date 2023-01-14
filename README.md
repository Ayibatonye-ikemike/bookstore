# API STRUCTURE
* GET / (unprotected) ==> HOME Route to display bookstore home content
* GET / LOgin (unprotected) ==>  Authenticate a new User
* GET / Logout (unprotected) ==> LOgout a new User

## BOOK API ROUTES
* GET    /api/v1/books (protected)  => Return all books
* POST   /api/v1/books (protected)  => Add a Book to the DB
* PUT    /api/v1/books/:id (protected)  => Update a book
* DELETE /api/v1/books/:id (protected)  => Delete a book by ID
* GET    /api/v1/books/:id (protected)  => Get books by unique ID

## AUTHOR API ROUTES
* GET    /api/v1/authors (protected)  => Return all authors
* POST   /api/v1/authors (protected)  => Add a author to the DB
* PUT    /api/v1/authors/:id (protected)  => Update a author
* DELETE /api/v1/authors/:id (protected)  => Delete a author by ID
* GET    /api/v1/authors/:id (protected)  => Get authors by unique ID

## OTHER NW
* Rate limiting
* Security middleware
* Good Logging
* Validation
