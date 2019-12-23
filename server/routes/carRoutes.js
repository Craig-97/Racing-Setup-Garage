'use strict';

module.exports = app => {
  const CarController = require('../controllers/carController');

  // routes
  app.route('/api/car').post(CarController.createCar);

  app.route('/api/car/:id')
    .get(CarController.getCarById)
    .put(CarController.updateCar)
    .delete(CarController.deleteCar);

  app.route('/api/cars').get(CarController.getCars);
};
