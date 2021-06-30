import {getUserConstants} from '../actions/constants';
const initialState = {
  getUser: [],
  message: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case getUserConstants.GET_USER_SUCCESS:
      state = {
        ...state,
        getUser: action.payload.user,
        message: 'succes',
      };
      break;
    case getUserConstants.GET_USER_FAILURE:
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
