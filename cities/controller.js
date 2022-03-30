const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const service = require('./service');
const router = express.Router();

module.exports = router;

router.get('/:zipCode', expressAsyncHandler(async (req, res) => {
    res.send(await service.getCityByZipCode(req.params.zipCode));
}))
