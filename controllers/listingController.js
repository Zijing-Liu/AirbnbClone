const Listing = require('./../models/listingModels');

exports.getAllListings = async (req, res) => {
  //console.log(res.JSON());
  const listings = await Listing.find();
  try {
    res.status(200).json({
      status: 'success',
      data: listings,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.createAListing = async (req, res) => {
  // const newListing = await Listing.create(req.body);
  // newListing.save();
  try {
    res.status(200).json({
      status: 'success',
      data: newListing,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
