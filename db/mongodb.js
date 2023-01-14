const mongoose = require("mongoose");
const config = require("../config/config");
const logger = require("../logger/logger");

function connectDb() {
 mongoose.connect(config.Mongodb_url)

 mongoose.connection.on("connected", () => {
    logger.info("Mongodb connected successfully")


    mongoose.connection.on("error", (err) => {
     logger.error("error occured")
     logger.error(err)
    })
 
})


}


module.exports = connectDb()