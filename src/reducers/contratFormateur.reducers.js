import {ContratFormateurConstants} from '../actions/constants';
const initialState = {
contrats: [],
message: null,
error: null,
};

const ContratFormateurReducer = (state = initialState, action) => {
switch (action.type) {
case ContratFormateurConstants.GET_CONTRAT_FORMATEURS_REQUEST:
  state = {
    ...state
  };
  break;
  case ContratFormateurConstants.GETByIdFORMATION_CONTRAT_SUCCESS:
  state = {
    ...state,
    contrats: action.payload.contrats,
    message: ' ',
  };
  break;
case ContratFormateurConstants.GETByIdFORMATION_CONTRAT_FAILURE:
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
export default ContratFormateurReducer