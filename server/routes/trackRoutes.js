'use strict';

module.exports = app => {
  const TrackController = require('../controllers/trackController');

  // routes
  app.route('/api/track').post(TrackController.createTrack);

  app.route('/api/track/:id')
    .get(TrackController.getTrackById)
    .put(TrackController.updateTrack)
    .delete(TrackController.deleteTrack);

  app.route('/api/tracks').get(TrackController.getTracks);
};
