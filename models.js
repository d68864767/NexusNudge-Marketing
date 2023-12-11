// models.js

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the schema for the models
const RecommendationSchema = new Schema({
  customerId: {
    type: String,
    required: true,
  },
  recommendation: {
    type: String,
    required: true,
  },
});

// Create the Recommendation model
const Recommendation = mongoose.model('Recommendation', RecommendationSchema);

module.exports = {
  Recommendation,
};
