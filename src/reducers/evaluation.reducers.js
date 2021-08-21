import { EvaluationConstants } from "../actions/constants";
const initialState = {
  Evaluations: [],
  message: null,
  error: null,
};

const EvaluationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case EvaluationConstants.GET_EVALUATION_SUCCESS:
      state = {
        ...state,
        Evaluations: action.payload.Evaluations,
        message: "ok ",
      };
      break;
    case EvaluationConstants.GET_EVALUATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case EvaluationConstants.GET_BY_ID_FORMATION_SUCCESS:
      state = {
        ...state,
        Evaluations: action.payload.Evaluation,
        message: " ",
      };
      break;
    case EvaluationConstants.GET_BY_ID_FORMATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case EvaluationConstants.DELETE_EVALUATION_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
      };
      break;
    case EvaluationConstants.DELETE_EVALUATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case EvaluationConstants.ADD_EVALUATION_REQUEST:
      state = {
        ...state,
      };
      break;
    case EvaluationConstants.ADD_EVALUATION_SUCCESS:
      state = {
        ...state,
        Evaluations: action.payload.Evaluation,
      };
      break;
    case EvaluationConstants.ADD_EVALUATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;
    case EvaluationConstants.GET_BY_ID_EVALUATION_SUCCESS:
      state = {
        ...state,
        Evaluations: action.payload.Evaluation,
        message: "ok ",
      };
      break;
    case EvaluationConstants.GET_BY_ID_EVALUATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;
    case EvaluationConstants.UPDATE_EVALUATION_REQUEST:
      state = {
        ...state,
      };
      break;
    case EvaluationConstants.UPDATE_EVALUATION_SUCCESS:
      state = {
        ...state,
        Evaluations: action.payload.Evaluation,
        message: "true",
      };
      break;
    case EvaluationConstants.UPDATE_EVALUATION_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        message: "false",
      };
      break;
    default:
      console.log("default");
  }
  return state;
};

export default EvaluationsReducer;
