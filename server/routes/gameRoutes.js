'use strict';

module.exports = app => {
  const GameController = require('../controllers/gameController');

  // routes
  app.route('/api/game').post(GameController.createGame);

  app.route('/api/game/:id')
    .get(GameController.getGameById)
    .put(GameController.updateGame)
    .delete(GameController.deleteGame);

  app.route('/api/games').get(GameController.getGames);
};
