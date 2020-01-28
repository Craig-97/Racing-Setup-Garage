import {
  UPDATE_DRIVER_PENDING,
  UPDATE_DRIVER_SUCCESS,
  UPDATE_DRIVER_ERROR
} from "../../actions";

export const updateDriverReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_DRIVER_PENDING:
      return {
        ...state,
        CRUD: {
          type: "UPDATE",
          pending: true
        }
      };
    case UPDATE_DRIVER_SUCCESS:
      return updateDriverToStore(state, action);
    case UPDATE_DRIVER_ERROR:
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

export const updateDriverToStore = (state, action) => {
  let updatedData = [...state.data];

  updatedData = updatedData.map(driver => {
    if (driver._id === action.payload._id) {
      return (driver = action.payload);
    } else {
      return driver;
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
