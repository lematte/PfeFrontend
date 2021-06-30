import {formationConstants} from '../actions/constants';
const initialState = {
  Formation: [],
  message: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case formationConstants.GET_FORMATION_SUCCESS:
      state = {
        ...state,
        Formation: action.payload.Formation,
        message: ' ',
      };
      break;
    case formationConstants.GET_FORMATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    default:
      console.log('default');
  }
  return state;
};
