import { combineReducers } from 'redux';
import gameReducer from './gameReducers';
import carReducer from './carReducers';
import trackReducer from './trackReducers';
import setupReducer from './setupReducers';
import driverReducer from './driverReducers';

export default combineReducers({
  games: gameReducer,
  cars: carReducer,
  tracks: trackReducer,
  setups: setupReducer,
  drivers: driverReducer
});
