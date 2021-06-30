import {candidatConstants, updatecandidatConstants} from '../actions/constants';
const initState = {
  candidat: {},
  error: null,
  message: '',
  update: '',
};

export default (state = {initState}, action) => {
  //console.log(action)
  switch (action.type) {
    case candidatConstants.GETBYIDUSER_CANDIDAT_SUCCESS:
      state = {
        candidat: action.payload.candidat,
        message: 'succes',
      };
      break;
    case candidatConstants.GETBYIDUSER_CANDIDAT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case updatecandidatConstants.UPDATE_CANDIDAT_REQUEST:
      state = {
        ...state,
      };
      break;
    case updatecandidatConstants.UPDATE_CANDIDAT_SUCCESS:
      state = {
        ...state,
        update: 'true',
      };
      break;
    case updatecandidatConstants.UPDATE_CANDIDAT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        update: 'false',
      };
      break;
  }
  return state;
};
