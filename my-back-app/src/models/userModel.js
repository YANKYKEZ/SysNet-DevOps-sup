const mongoose  = require('mongoose') ;

UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String
});

module.exports = mongoose.model("users", UserSchema);
