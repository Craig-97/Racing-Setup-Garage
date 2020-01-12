import {
  DELETE_CAR_PENDING,
  DELETE_CAR_SUCCESS,
  DELETE_CAR_ERROR
} from '../../actions/carActions';

export const deleteCarReducer = (state, action) => {
  switch (action.type) {
    case DELETE_CAR_PENDING:
      return {
        ...state,
        CRUD: {
          type: 'DELETE',
          pending: true
        }
      };
    case DELETE_CAR_SUCCESS:
      return {
        ...state,
        CRUD: {
          type: null,
          pending: false,
          message: `${action.payload.name} Successfully Deleted`
        }
      };
    case DELETE_CAR_ERROR:
      return {
        ...state,
        CRUD: {
          type: 'DELETE',
          pending: false,
          error: action.error
        }
      };
    default:
      return state;
  }
}

export const deleteCarFromStore = (state, action) => {
  return {
    ...state,
    data: state.data.filter(car => car._id !== action.payload._id)
  };
};
