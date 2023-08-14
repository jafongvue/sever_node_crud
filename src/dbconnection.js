const mongoose = require('mongoose');

const URI = process.env.mongodb_URI

const dbconnection = async ()=>{
    await mongoose.connect(
        URI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (error) => {
            if(error) return console.log('connect DB fail !');
            console.log('connected DB successfully')
        }
    )
}

module.exports = dbconnection;