const express = require('express');
const router  = express.Router();
const { getSingleDonationRequestById } = require('../db/queries/DisplaySingleDonationRequest');


router.get('/:id', (req, res) => {
  const donationId = req.params.id;
  if (!/^\d+$/.test(donationId)) {
    return res.status(400).json({ error: 'Invalid donation ID' });
  }

  getSingleDonationRequestById(donationId)
    .then((donation) => {
      if (!donation) {
        return res.status(404).json({ error: 'Donation not found' });
      }

      res.json(donation);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
});

module.exports=router;

