import {
  formationConstants,
  formationgetByIdCentreConstants,
  ADDformationConstants,
  DeleteformationConstants,
} from "../actions/constants";
const initialState = {
  Formation: [],
  RRF:[],
  formations: [],
  loading: false,
  message: null,
  error: null,
};

const FormationReducer = (state = initialState, action) => {
  switch (action.type) {
    case formationConstants.GET_FORMATION_SUCCESS:
      state = {
        ...state,
        Formation: action.payload.Formation,
        message: "ok ",
        loading: false,
      };
      break;
    case formationConstants.GET_FORMATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case formationgetByIdCentreConstants.GETByIdCentre_FORMATION_SUCCESS:
      state = {
        ...state,
        formations: action.payload.formations,
        loading: false,
        message: " ",
      };
      break;
    case formationgetByIdCentreConstants.GETByIdCentre_FORMATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
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
    case ADDformationConstants.ADD_FORMATION_REQUEST:
      state = {
        ...state,
      };
      break;
      case ADDformationConstants.ADD_FORMATION_SUCCESS:
      state = {
        ...state,
        message: action.payload.formation,
      };
      break;
    case ADDformationConstants.ADD_FORMATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
      case formationConstants.GET_FORMATION_BY_Name_SUCCESS:
      state = {
        ...state,
        Formation: action.payload.RRFormation,
        loading: true,
        message: "ok ",
      };
      break;
    case formationConstants.GET_FORMATION_BY_Name_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
      case formationConstants.GET_FORMATION_BY_ID_REQUEST:
      state = {
        ...state,
      };
      break;
      case formationConstants.GET_FORMATION_BY_ID_SUCCESS:
      state = {
        ...state,
        Formation: action.payload.formation,
      };
      break;
    case formationConstants.GET_FORMATION_BY_ID_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
      case formationConstants.UPDATE_FORMATION_REQUEST:
      state = {
        ...state,
      };
      break;
    case formationConstants.UPDATE_FORMATION_SUCCESS:
      state = {
        ...state,
        message: 'true',
      };
      break;
    case formationConstants.UPDATE_FORMATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        message: 'false',
      };
      break;
    default:
      console.log("default");
  }
  return state;
};

export default FormationReducer;
