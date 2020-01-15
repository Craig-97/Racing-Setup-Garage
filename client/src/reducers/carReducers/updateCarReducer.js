import {
  UPDATE_CAR_PENDING,
  UPDATE_CAR_SUCCESS,
  UPDATE_CAR_ERROR
} from '../../actions';

export const updateCarReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_CAR_PENDING:
      return {
        ...state,
        CRUD: {
          type: 'UPDATE',
          pending: true
        }
      };
    case UPDATE_CAR_SUCCESS:
      return {
        ...state,
        CRUD: {
          type: null,
          pending: false,
          message: `${action.payload.name} Successfully Updated`
        }
      };
    case UPDATE_CAR_ERROR:
      return {
        ...state,
        CRUD: {
          type: 'UPDATE',
          pending: false,
          error: action.error
        }
      };
    default:
      return state;
  }
};

export const updateCarToStore = (state, action) => {
  let updatedData = [...state.data];

  updatedData = updatedData.map(car => {
    if (car._id === action.payload._id) {
      return (car = action.payload);
    } else {
      return car;
    }
  });

  return {
    ...state,
    data: updatedData !== state.data ? updatedData : [...state.data]
  };
};
