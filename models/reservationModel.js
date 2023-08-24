const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: String,
});

// create a model out of the schema
const Reservation = mongoose.model('User', reservationSchema);
module.exports = Reservation;
