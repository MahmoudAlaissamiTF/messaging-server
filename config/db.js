const { ConnectOptions } = require('mongodb');
const mongoose = require('mongoose');
const connectDB = async ()=> {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDb Connected');   
}
module.exports=connectDB;