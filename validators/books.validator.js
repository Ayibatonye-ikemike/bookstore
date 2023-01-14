const joi = require('joi');

const AddbookValidator = joi.object({
    title: joi.string()
        .min(5)
        .max(255)
        .required(),
    shortDescription: joi.string()
        .min(5)
        .max(255)
        .optional(),
    longDescription: joi.string()
        .min(5)
        .max(255),
    year: joi.number()
        .min(1900)
        .max(2022)
        .required(),
    isbn: joi.string()
        .min(10)
        .max(13)
        .required(),
    price: joi.number()
        .min(0)
        .required(),
    createAt: joi.date()
        .default(Date.now()),
    lastUpdateAt: joi.date()
        .default(Date.now())
})


const UpdatebookValidator = joi.object({
    title: joi.string()
        .min(5)
        .max(255),
    shortDescription: joi.string()
        .min(5)
        .max(255),
    year: joi.number()
        .min(1900)
        .max(2022),
    isbn: joi.string()
        .min(10)
        .max(13),
    price: joi.number()
        .min(0)
})


const validateAddBookMiddleWare = async (req, res, next) => {
    const bookPayload = req.body;
    try {
        await AddbookValidator.validateAsync(bookPayload);
        next();
    } catch (error) {
        console.log(error);
        return res.status(406).send(error.details[0].message);
    }

}

const validateUpdateBookMiddleWare = async (req, res, next) => {
    const bookPayload = req.body;
    try {
        await UpdatebookValidator.validateAsync(bookPayload);
        next();
    } catch (error) {
        console.log(error);
        return res.status(406).send(error.details[0].message);
    }

}
module.exports = {
    validateAddBookMiddleWare,
    validateUpdateBookMiddleWare
}