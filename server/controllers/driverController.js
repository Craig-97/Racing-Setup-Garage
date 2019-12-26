'use strict';

const Driver = require('../models/driverModel');

exports.createDriver = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a driver'
    });
  }

  const driver = new Driver(body);

  if (!driver) {
    return res.status(400).json({ success: false, error: err });
  }

  driver
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: 'Driver created!',
        driver
      });
    })
    .catch(error => {
      return res.status(400).json({
        error,
        message: 'Driver not created!'
      });
    });
};

exports.updateDriver = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a body to update'
    });
  }

  Driver.findOne({ _id: req.params.id }, (err, driver) => {
    if (err) {
      return res.status(404).json({
        err,
        message: 'Driver not found!'
      });
    }
    driver = Object.assign(driver, body)

    driver
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          message: 'Driver updated!',
          driver
        });
      })
      .catch(error => {
        return res.status(404).json({
          error,
          message: 'Driver not updated!'
        });
      });
  });
};

exports.deleteDriver = async (req, res) => {
  await Driver.findOneAndDelete({ _id: req.params.id }, (err, driver) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!driver) {
      return res
        .status(404)
        .json({ success: false, error: `Driver not found` });
    }

    return res.status(200).json({ success: true, data: driver });
  }).catch(err => console.log(err));
};

exports.getDriverById = async (req, res) => {
  await Driver.findOne({ _id: req.params.id }, (err, driver) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    return res.status(200).json({ success: true, data: driver });
  }).catch(err => console.log(err));
};

exports.getDrivers = async (req, res) => {
  await Driver.find({}, (err, drivers) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!drivers.length) {
      return res
        .status(404)
        .json({ success: false, error: `Driver not found` });
    }
    return res.status(200).json({ success: true, data: drivers });
  }).catch(err => console.log(err));
};
