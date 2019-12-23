const mongoose = require('mongoose');

// MongoDB details
const USER = 'admin';
const PASSWORD = 'dCOKfMlEh1DplHDP';
const DB = 'db_1';

// mongodb connection
const uri = `mongodb+srv://${USER}:${PASSWORD}@cluster0-dsrez.mongodb.net/${DB}?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// error handler
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;