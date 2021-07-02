import {centre_formationConstants , GETBYIDUSERCENTREConstants} from '../actions/constants';
const initialState = {
  centre_formation: [],
  centre: [],
  user: [],
  message: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case centre_formationConstants.GET_CENTRE_FORMATION_SUCCESS:
      state = {
        ...state,
        centre_formation: action.payload.centre_formation,
        user: action.payload.centre_formation.User,
        message: 'hello',
      };
      break;
    case centre_formationConstants.GET_CENTRE_FORMATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
      case GETBYIDUSERCENTREConstants.GETBYIDUSER_CENTRE_SUCCESS:
      state = {
        ...state,
        centre: action.payload.centre
      };
      break;
      case GETBYIDUSERCENTREConstants.GETBYIDUSER_CENTRE_FAILURE:
        state = {
          ...state,
          error: action.payload.error
        };
        break;
    default:
      console.log('default');
  }
  return state;
};
