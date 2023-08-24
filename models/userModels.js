const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
});

// create a model out of the schema
const User = mongoose.model('User', userSchema);
module.exports = User;
