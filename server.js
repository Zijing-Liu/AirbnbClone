// database connection & configuration
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
// connect to the database through the url and specify the options
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    //console.log(con.connection);
    //console.log('DB connection successful');
  });

const app = require('./app.js');
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
