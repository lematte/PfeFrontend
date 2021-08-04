import {getUserConstants,uploadImage} from '../actions/constants';
const initialState = {
  getUser: [],
  message: null,
  error: null,
  image: null
};

const UserReducer = (state = initialState, action) => {
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
      case uploadImage.UPLOAD_IMAGE_REQUEST:
        state = {
          ...state
        };
        break;
      case uploadImage.UPLOAD_IMAGE_SUCCESS:
      state = {
        ...state,
        image: action.payload.image,
        message: 'succes',
      };
      break;
    case uploadImage.UPLOAD_IMAGE_FAILURE:
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
export default UserReducer