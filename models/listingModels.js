const mongoose = require('mongoose');
// const userSchema = require('./userModels');
const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    // specify the error if the field is missing
    required: [true, 'A listing must have a title'], // build-in data validator
    unique: true, // not a validator
    trim: true,
    maxLength: [40, 'A listing title must have less or equal to 40 characters'],
    minLength: [10, 'A listing title must have more or equal to 10 characters'],
    //validate: [validator.isAlpha, 'Tour name must only contain characters'],
  },
  description: {
    type: String,
    required: [true, 'A listing must have a description'],
    trim: true,
  },
  imagSrc: {
    type: String,
    required: [true, 'A listing must have an image source'],
  },
  createdAt: {
    type: Date,
    default: Date.now(), // auto generate the current date
    select: false, // hide this property from the client
  },
  category: {
    type: String,
    required: [true, 'A listing must have a category'],
  },
  roomCount: {
    type: Number,
    required: [true, 'A listing must have a roomCount'],
  },
  bathroomCount: {
    type: Number,
    required: [true, 'A listing must have a bathroomCount'],
  },
  guestCount: {
    type: Number,
    required: false,
  },
  locationValue: {
    type: String,
    required: [true, 'A listing must have a locationValue'],
  },

  price: {
    type: Number,
    required: [true, 'A listing must have a price'],
  },
  priceDiscount: {
    type: Number,
    // validate: {
    //   validator: function (val) {
    //     return val <= this.price;
    //   },
    // },
  },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId, // foreign key
  //   ref: 'User', // reference the user Model
  // },
  // reservation: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Reservation',
  // },
});
const Listing = mongoose.model('Listing', listingSchema);

// one way of creating document and save doc to collection without the http request routes
// // create a testing document(object) out of the model
// const testListing = new Listing( {
//   "title": "Luxury Beachfront Villa3",
//   "description": "Elegant villa overlooking the ocean",
//   "imagSrc": "path/to/image4.jpg",
//   "category": "Villa",
//   "roomCount": 5,
//   "bathroomCount": 4,
//   "guestCount": 10,
//   "locationValue": "Coastal Paradise",
//   "price": 4000,
//   "priceDiscount": 200
// });
// console.log(mongoose.version)

// testListing
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
module.exports = Listing;
