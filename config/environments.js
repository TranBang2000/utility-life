require('dotenv').config()
const env={
    PORT:process.env.PORT,
    HOST_NAME:process.env.HOST_NAME,
    DATABASE_NAME:process.env.DATABASE_NAME,
    MONGO_URI:process.env.MONGO_URI,
    ACCESS_TOKEN_SECRET:process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET:process.env.REFRESH_TOKEN_SECRET
}
module.exports= {env}