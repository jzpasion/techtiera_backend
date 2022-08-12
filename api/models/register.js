const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    email:{type: String ,required : true ,unique: true},
    firstName:{ type : String ,required : true},
    lastName:{type: String ,required : true},
    password:{type: String ,required : true},
    token:{type: String}
},{collection: 'users' ,timestamps: true})

const user = mongoose.model('UserRigister' ,registerSchema);

module.exports = user;