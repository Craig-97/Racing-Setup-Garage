'use strict';

module.exports = app => {
  const DriverController = require('../controllers/driverController');

  // routes
  app.route('/api/driver').post(DriverController.createDriver);

  app.route('/api/driver/:id')
    .get(DriverController.getDriverById)
    .put(DriverController.updateDriver)
    .delete(DriverController.deleteDriver);

  app.route('/api/drivers').get(DriverController.getDrivers);
};
