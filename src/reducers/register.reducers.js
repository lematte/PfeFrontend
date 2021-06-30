import {registerConstants} from '../actions/constants';

const initState = {
  error: null,
  message: '',
  loading: false,
  register: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case registerConstants.REGISTER_REQUEST:
      state = {
        ...state,
        // loading : true
        //error : action.payload.error
      };
      break;

    case registerConstants.REGISTER_SUCCESS:
     // localStorage.setItem('token', action.payload.token)

    state = {
        ...state,
        loading: false,
        message: action.payload.message,
        register:true,
      };
      break;

    case registerConstants.REGISTER_FAILURE:
      state = {
        ...state,
        loading: false,
        register:false,
    //    error: action.payload.error,
      };
      break;
  }
  return state;
};
