const joi = require('joi');

const AddAuthorValidator = joi.object({
    firstname: joi.string()
        .max(255)
        .trim()
        .required(),
    lastname: joi.string()
        .max(255)
        .optional(),
    dob: joi.date()
        .greater("1-1-1900")
        .less("1-1-2022")
        .required(),
    country: joi.string()
        .optional(),
    books: joi.array()
        .items(joi.string())
        .optional(),
    createAt: joi.date()
        .default(Date.now()),
    lastUpdateAt: joi.date()
        .default(Date.now)
})


const UpdateAuthorValidator = joi.object({
    firstname: joi.string()
        .max(255)
        .trim(),
    lastname: joi.string()
        .max(255),
    dob: joi.date()
        .min(1900)
        .max(2022),
    country: joi.string(),
    books: joi.array()
        .items(joi.string()),
})





const validateAddAuthorMiddleWare = async (req, res, next) => {
    const AuthorPayload = req.body;
    try {
        await AddAuthorValidator.validateAsync(AuthorPayload);
        next();
    } catch (error) {
        console.log(error);
        return res.status(406).send(error.details[0].message);
    }

}

const validateUpdateAuthorMiddleWare = async (req, res, next) => {
    const AuthorPayload = req.body;
    try {
        await UpdateAuthorValidator.validateAsync(AuthorPayload);
        next();
    } catch (error) {
        console.log(error);
        return res.status(406).send(error.details[0].message);
    }

}
module.exports = {
    validateAddAuthorMiddleWare,
    validateUpdateAuthorMiddleWare
}