const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/TDP-DB', { useNewUrlParser: true }, (err) => {
  if (err) return console.error(err);
  return console.log('Connection successful');
});

const movieSchema = new Schema ({
  name: {
      type: String,
      min: 2,
      required: true
  },
  description: {
      type: String,
      default: "N/A"
  },
  minsLength: {
      type: Number,
      min: 2,
      required: true
  }
});

const movieMongoose = mongoose.model('movies', movieSchema);

module.exports = movieMongoose;