import {SallegetByIdCentreConstants ,DeleteSalleConstants,
    AddSalleConstants,UpdateSalleConstants
} from '../actions/constants';
const initialState = {
  salles: [],
  salle : [],
  message: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SallegetByIdCentreConstants.GETByIdCentre_SALLE_SUCCESS:
      state = {
        ...state,
        salles: action.payload.salles
          };
      break;
    case SallegetByIdCentreConstants.GETByIdCentre_SALLE_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
      case AddSalleConstants.GETByIdCentre_SALLE_SUCCESS:
        state = {
          ...state,
          salle: action.payload.salle
            };
        break;
        case AddSalleConstants.GETByIdCentre_SALLE_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        };
        break;
      case DeleteSalleConstants.DELETE_SALLE_SUCCESS:
        state = {
          ...state,
          message: 'true'
            };
        break;
      case DeleteSalleConstants.DELETE_SALLE_FAILURE:
        state = {
          ...state,
          error: action.payload.error,
        };
        break;
        case UpdateSalleConstants.UPDATE_SALLE_SUCCESS:
        state = {
          ...state,
          message: 'true'
            };
        break;
        case UpdateSalleConstants.UPDATE_SALLE_FAILURE:
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
