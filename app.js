const express = require('express');
const app = express();

// import router (as small applications), the routers here are actually middleware
const listingRouter = require('./routes/listingRoutes');
const userRouter = require('./routes/userRoutes');
// mount the specified middleware functions at the path specified.
app.use('/api/v1/listings', listingRouter);
app.use('/api/v1/listings', userRouter);

module.exports = app;
