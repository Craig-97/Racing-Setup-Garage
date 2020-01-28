import { combineReducers } from "redux";
import { gameReducer } from "./gameReducer";
import { carReducer } from "./carReducer";
import { trackReducer } from "./trackReducer";
import { setupReducer } from "./setupReducer";
import { driverReducer } from "./driverReducer";

export default combineReducers({
  games: gameReducer,
  cars: carReducer,
  tracks: trackReducer,
  setups: setupReducer,
  drivers: driverReducer
});
