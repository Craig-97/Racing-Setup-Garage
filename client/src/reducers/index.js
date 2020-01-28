import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { carReducer } from "./carReducer";
import { trackReducer } from "./trackReducers";
import { setupReducer } from "./setupReducers";
import { driverReducer } from "./driverReducers";

export default combineReducers({
  games: gameReducer,
  cars: carReducer,
  tracks: trackReducer,
  setups: setupReducer,
  drivers: driverReducer
});
