import {ContratgetByIdFormationConstants, ContratConstants 
    } from '../actions/constants';
const initialState = {
    contrats: [],
  message: null,
  error: null,
};

const ContratFormationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ContratgetByIdFormationConstants.GETByIdFORMATION_CONTRAT_SUCCESS:
      state = {
        ...state,
        contrats: action.payload.contrats,
        message: ' ',
      };
      break;
    case ContratgetByIdFormationConstants.GETByIdFORMATION_CONTRAT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
      case ContratConstants.DELETE_CONTRAT_REQUEST:
      state = {
        ...state
      };
      break;
      case ContratConstants.DELETE_CONTRAT_SUCCESS:
      state = {
        ...state,
        message: 'true',
      };
      break;
    case ContratConstants.DELETE_CONTRAT_FAILURE:
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
export default ContratFormationReducer