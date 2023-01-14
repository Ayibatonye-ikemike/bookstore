const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config/config")
const rateLimit = require("express-rate-limit");
const helmet = require('helmet')
const logger = require('./logger/logger');
const httpLogger = require('./logger/httpLogger')
const auth0Middleware = require('./auth/auth0');
const { requiresAuth } = require('express-openid-connect');

//db
const connectDb = require("./db/mongodb")


// auth router attaches /login, /logout, and /callback routes to the baseURL
//app.use(auth0Middleware);

//routes
const bookRouter = require("./routes/routes.books")
const AuthorRouter = require("./routes/routes.authors")

//app
const app = express()

//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth0Middleware);

// Defaults to in-memory store. 
// You can use redis or any other store.
const limiter = rateLimit({
	windowMs: 0.5 * 60 * 1000, // 15 minutes
	max: 4, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use("/api/v1/books",  requiresAuth(), bookRouter)
app.use("/api/v1/authors", requiresAuth(), AuthorRouter)
app.get("/", (res, req) => {
     res.send("hello bookstore")
})


// Apply the rate limiting middleware to all requests
app.use(limiter)

//add secuirty
app.use(helmet())

//Error Handler Middleware

app.use((err, req, res, next) => {
    logger.error(err)
    const errorStatus = err.status || 500
    res.status(errorStatus).send("an error occured")
    next()
})

//Get profile
// Add the requiresAuth middleware for routes that require authentication
app.get('/profile', (req, res) => {
    console.log(req.oidc.user);
    res.render('profile', {
        user: req.oidc.user,
    });

});

//start server

app.listen(config.PORT, () => {
        logger.info(`server started at http://localhost:${config.PORT}`)
})