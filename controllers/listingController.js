// import the listing model object
const Listing = require('./../models/listingModels');
exports.getAllListings = async (req, res) => {
  try {
    // excluded the non valid query fields
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];
    // The delete operator removes a property from an object.
    excludedFields.forEach((el) => delete queryObj[el]);
    console.log(req.query, queryObj);

    //const listings = await Listing.find();
    const middleQuery = Listing.find();
    const listings = await middleQuery;
    res.status(200).json({
      status: 'success',
      data: listings,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// async await
exports.createAListing = async (req, res) => {
  //   const newTour = new Tour({});
  //   newTour.save();
  // we'll have to use the middleware express.json() to process the req data, add the body object to the req
  //console.log(req.body);
  try {
    const newListing = await Listing.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        tour: newListing,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.updateAListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: { listing },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.deleteListing = async (req, res) => {
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    //console.log(req.params);
    res.status(200).json({
      status: 'success',
      data: {
        listing,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err.message,
    });
  }
};
