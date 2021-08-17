import { CategoriesConstants } from "../actions/constants";
const initialState = {
  categories: [],
  message: null,
  error: null,
};

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CategoriesConstants.GET_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case CategoriesConstants.GET_CATEGORIES_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case CategoriesConstants.GET_BY_NOM_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;
    case CategoriesConstants.GET_BY_NOM_CATEGORIES_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case CategoriesConstants.ADD_CATEGORIES_REQUEST:
      state = {
        ...state,
      };
      break;
    case CategoriesConstants.ADD_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categorie,
      };
      break;
    case CategoriesConstants.ADD_CATEGORIES_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
      case CategoriesConstants.UPDATE_CATEGORIES_REQUEST:
      state = {
        ...state,
      };
      break;
    case CategoriesConstants.UPDATE_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categorie,
      };
      break;
    case CategoriesConstants.UPDATE_CATEGORIES_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
      case CategoriesConstants.DELETE_CATEGORIES_REQUEST:
      state = {
        ...state,
      };
      break;
    case CategoriesConstants.DELETE_CATEGORIES_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
      };
      break;
    case CategoriesConstants.DELETE_CATEGORIES_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    default:
      console.log("default");
  }
  return state;
};

export default CategoriesReducer;
