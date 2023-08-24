// a new express application
const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const app = express();
const router = express.Router();
app.use('/api/v1/users', router);

// app.route(path) Returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware.
// Use app.route() to avoid duplicate route names (and thus typo errors).
router.route('/').get(getAllUsers);

module.exports = router;
