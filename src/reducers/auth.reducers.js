import {authConstants} from '../actions/constants';

const initialState = {
  token: '',
  user: {
    _id: '',
    Email: '',
    role: '',
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: '',
};

const AuthReducers = (state = initialState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        authenticating: true,
      }
      break;
    case authConstants.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        authenticate: true,
        authenticating: false,
        loading: false,
      };
      break;
    case authConstants.LOGIN_FAILURE:
      localStorage.removeItem('token');
      state = {
        ...state,
        user: null,
        token: null,
        authenticate: false,
        authenticating: false,
        error: action.payload.error,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initialState,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
      default:
        // do nothing
  }
  return state;
};
export default AuthReducers;