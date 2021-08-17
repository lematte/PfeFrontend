import {formateurConstants} from '../actions/constants';
const initialState = {
  Formateur: [],
  message: null,
  error: null,
};

const FormateurReducer = (state = initialState, action) => {
  switch (action.type) {
    case formateurConstants.GET_FORMATEUR_SUCCESS:
      state = {
        ...state,
        Formateur: action.payload.Formateur,
        
      };
      break;
    case formateurConstants.GET_FORMATEUR_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
      case formateurConstants.GET_BY_PRENOM_FORMATEUR_SUCCESS:
      state = {
        ...state,
        Formateur: action.payload.formateur,
      };
      break;
    case formateurConstants.GET_BY_PRENOM_FORMATEUR_FAILURE:
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

export default FormateurReducer;