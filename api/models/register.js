const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    firstName:{ type : String ,required : true},
    lastName:{type: String ,required : true},
    email:{type: String ,required : true ,unique: true},
    password:{type: String ,required : true}
},{collection: 'users' ,timestamps: true})

const user = mongoose.model('UserRigister' ,registerSchema);

module.exports = user;