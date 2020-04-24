const mongoose = require('mongoose');

//  instructing mongooose to connect to mongodb which is installed locally, hence "localhost"
//  followed by database name
mongoose.connect("mongodb://localhost/authApi", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

