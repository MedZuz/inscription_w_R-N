const mongoose = require('mongoose')
const Schema =  mongoose.Schema;



const UserShema = new Schema ({

    Email : String , 
    Lastname : String , 
    Firstname : String , 
    Age : String 


}, {timestamps: true } ) //time stamps here to tell when somthing change (-timnnn)



module.exports = mongoose.model('users',UserShema)