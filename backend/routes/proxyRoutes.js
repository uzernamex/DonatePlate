const express = require('express');
const router = express.Router();
const { saveDonationForm, getDonationForm } = require('../controllers/donationFormController');
router.post('/food-donation-form', saveDonationForm);
router.get('/food-donation-form/:id', getDonationForm);

module.exports = router;
