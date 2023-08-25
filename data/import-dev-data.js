// access the file system
const fs = require('fs');
// database connection & configuration
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
// import the Listing model
const Listing = require('./../models/listingModels');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

// connect to the database through the url and specify the options
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB CONNECTED');
  });

// READ JSON file using the fs module in Node.js
const listingsData = fs.readFileSync(`${__dirname}/listings.json`, `utf-8`);
console.log(typeof listingsData);
const listings = JSON.parse(listingsData); // Parse the JSON string into an array of objects

// IMPORT DATA INTO DB using async function
const importData = async () => {
  try {
    // the create methods on the document Model can accept an array of objects
    await Listing.create(listings);
    console.log('Data successfully loaded');
    // stop the process
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await Listing.deleteMany(); // MongoDB method, applicable to mongoose model
    console.log('Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] == '--delete') {
  deleteData();
}

console.log(process.argv);
// [
//   '/usr/local/bin/node',    /// the location of node
//   '/Users/celine/Documents/GitHub/AirbnbClone/data/import-dev-data.js' // the path of the file
// ]
