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
  userId: {
    type: mongoose.Schema.Types.ObjectId, // foreign key
    ref: 'User', // reference the user Model
  },
  reservation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation',
  },
});

const Listing = mongoose.model('Listing', listingSchema);
// create a testing document(object) out of the model
const testListing = new Listing({
  title: 'Modern Downtown Apartment2',
  description: 'Stylish apartment in the heart of the city.',
  imagSrc: 'path/to/image1.jpg',
  category: 'Apartment',
  roomCount: 2,
  bathroomCount: 1,
  guestCount: 3,
  locationValue: 'City Center',
  price: 1500,
  priceDiscount: 0,
  userId: '611f76e2f5aebc001c89b1d0',
  reservation: '6123d556b8a71e001c7e268a',
});

testListing
  .save()
  .then((doc) => {
    console.log(doc);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = Listing;
