import {
  ADD_ONE,
  REMOVE_ONE,
  ADD_TEN,
  REMOVE_TEN,
  RESET,
} from './counterTypes';

const initialState = {
  count: 25,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        count: state.count + 1,
      };
    case REMOVE_ONE:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADD_TEN:
      return {
        ...state,
        count: state.count + 10,
      };
    case REMOVE_TEN:
      return {
        ...state,
        count: state.count - 10,
      };
    case RESET:
      return {
        count: initialState.count,
      };

    default:
      return state;
  }
};

export default counterReducer;
