import {centre_formationConstants , GETBYIDUSERCENTREConstants} from '../actions/constants';
const initialState = {
  centre_formation: [],
  centre: [],
  user: [],
  message: null,
  error: null,
};

const centre_formationsReducers = (state = initialState, action) => {
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
        case centre_formationConstants.UPDATE_CENTER_REQUEST:
      state = {
        ...state,
      };
      break;
    case centre_formationConstants.UPDATE_CENTER_SUCCESS:
      state = {
        ...state,
        message: 'true',
      };
      break;
    case centre_formationConstants.UPDATE_CENTER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        message: 'false',
      };
      break;
    default:
      console.log('default');
  }
  return state;
};
export default centre_formationsReducers