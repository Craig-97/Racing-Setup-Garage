'use strict';

module.exports = app => {
  const SetupController = require('../controllers/setupController');

  // routes
  app.route('/api/setup').post(SetupController.createSetup);

  app.route('/api/setup/:id')
    .get(SetupController.getSetupById)
    .put(SetupController.updateSetup)
    .delete(SetupController.deleteSetup);

  app.route('/api/setups').get(SetupController.getSetups);
};
