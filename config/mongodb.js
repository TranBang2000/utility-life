const mongoose =require('mongoose')
const {env} =require('./environments')

const connectDB= async ()=>{
    try {
        await mongoose.connect(env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser:true
        })
        console.log(`Connected successfully`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}
module.exports = connectDB
