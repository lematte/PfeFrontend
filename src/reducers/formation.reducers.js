import {formationConstants, formationgetByIdCentreConstants,DeleteformationConstants} from "../actions/constants";
const initialState = {
  Formation: [],
  formations : [],
  message: null,
  error: null
}

const FormationReducer =(state = initialState, action) => {
  switch (action.type) {
    case formationConstants.GET_FORMATION_SUCCESS :
      state = {
        ...state,
        Formation: action.payload.Formation,
        message: 'ok '
      }
      break;
    case formationConstants.GET_FORMATION_FAILURE :
      state = {
        ...state,
        error: action.payload.error
      };
      break;
      case formationgetByIdCentreConstants.GETByIdCentre_FORMATION_SUCCESS :
        state = {
          ...state,
          formations: action.payload.formations,
          message: ' ',
        };
        break;
        case formationgetByIdCentreConstants.GETByIdCentre_FORMATION_FAILURE :
        state = {
          ...state,
          error: action.payload.error
        };
        break;
        case DeleteformationConstants.DELETE_FORMATION_SUCCESS:
          state = {
            ...state,
            message: action.payload.message,
          };
          break;
          case DeleteformationConstants.DELETE_FORMATION_FAILURE:
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


export default FormationReducer;