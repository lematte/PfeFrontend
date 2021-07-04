import {ContratgetByIdFormationConstants 
    } from '../actions/constants';
const initialState = {
    contrats: [],
  message: null,
  error: null,
};

export default (state = initialState, action) => {
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
      default:
      console.log('default');
  }
  return state;
};
