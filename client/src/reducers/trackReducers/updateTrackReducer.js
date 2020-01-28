import {
  UPDATE_TRACK_PENDING,
  UPDATE_TRACK_SUCCESS,
  UPDATE_TRACK_ERROR
} from "../../actions";

export const updateTrackReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TRACK_PENDING:
      return {
        ...state,
        CRUD: {
          type: "UPDATE",
          pending: true
        }
      };
    case UPDATE_TRACK_SUCCESS:
      return updateTrackToStore(state, action);
    case UPDATE_TRACK_ERROR:
      return {
        ...state,
        CRUD: {
          type: "UPDATE",
          pending: false,
          error: action.error
        }
      };
    default:
      return state;
  }
};

export const updateTrackToStore = (state, action) => {
  let updatedData = [...state.data];

  updatedData = updatedData.map(track => {
    if (track._id === action.payload._id) {
      return (track = action.payload);
    } else {
      return track;
    }
  });

  return {
    ...state,
    data: updatedData !== state.data ? updatedData : [...state.data],
    CRUD: {
      type: null,
      pending: false,
      message: `${action.payload.name} Successfully Updated`
    }
  };
};
