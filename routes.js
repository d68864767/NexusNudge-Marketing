// routes.js

const express = require('express');
const router = express.Router();

// Import controllers
const {
  getRecommendation,
  createCampaign,
  updateCampaign,
  deleteCampaign,
  getCampaigns,
} = require('./controllers');

// Recommendation route
router.get('/recommendation/:customerId', getRecommendation);

// Campaign routes
router.post('/campaigns', createCampaign);
router.put('/campaigns/:campaignId', updateCampaign);
router.delete('/campaigns/:campaignId', deleteCampaign);
router.get('/campaigns', getCampaigns);

module.exports = router;
