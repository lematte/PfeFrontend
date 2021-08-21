import axios from "../helpers";
import { EvaluationConstants } from "./constants";

export const getEvaluations = () => {
  return async (dispatch) => {
    dispatch({
      type: EvaluationConstants.GET_EVALUATION_REQUEST,
    });
    const res = await axios.get(`/evaluations`);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: EvaluationConstants.GET_EVALUATION_SUCCESS,
        payload: { Evaluations: res.data },
      });
    } else {
      // echec
      dispatch({
        type: EvaluationConstants.GET_EVALUATION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
}

export const getByFormation = (id) => {
  return async (dispatch) => {
    dispatch({
      type: EvaluationConstants.GET_BY_ID_FORMATION_REQUEST,
    });
    const res = await axios.get(`/evaluations/formation/` + id);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: EvaluationConstants.GET_BY_ID_FORMATION_SUCCESS,
        payload: { Evaluation: res.data },
      });
    } else {
      // echec
      dispatch({
        type: EvaluationConstants.GET_BY_ID_FORMATION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const ADDEvaluation = (form) => {
  console.log(form);
  return async (dispatch) => {
    dispatch({
      type: EvaluationConstants.ADD_EVALUATION_REQUEST,
    });
    const res = await axios.post(`/evaluations/add`, form);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: EvaluationConstants.ADD_EVALUATION_SUCCESS,
        payload: { Evaluation: res.data },
      });
    } else {
      // echec
      dispatch({
        type: EvaluationConstants.ADD_EVALUATION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getEvaluationById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: EvaluationConstants.GET_BY_ID_EVALUATION_REQUEST,
    });
    const res = await axios.get(`/evaluations/` + id);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: EvaluationConstants.GET_BY_ID_EVALUATION_SUCCESS,
        payload: { Evaluation: res.data },
      });
    } else {
      // echec
      dispatch({
        type: EvaluationConstants.GET_BY_ID_EVALUATION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const DeleteEvaluation = (id) => {
  return async (dispatch) => {
    dispatch({
      type: EvaluationConstants.DELETE_EVALUATION_REQUEST,
    });
    const res = await axios
      .delete(`/evaluations/delete/` + id)
      .then((res) => {
        // succes
        console.log(res.data);
        dispatch({
          type: EvaluationConstants.DELETE_EVALUATION_SUCCESS,
          payload: { message: res.data },
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: EvaluationConstants.DELETE_EVALUATION_FAILURE,
          payload: { error: err.response.data },
        });
      });
  };
};

export const updateEvaluation = (id, Evaluation) => {
  return async (dispatch) => {
    dispatch({
      type: EvaluationConstants.UPDATE_EVALUATION_REQUEST,
    });
    await axios
      .put(`/evaluations/update/` + id, Evaluation)
      .then((res) => {
        // succes
        console.log(res.data);
        dispatch({
          type: EvaluationConstants.UPDATE_EVALUATION_SUCCESS,
          payload: { Evaluation: res.data },
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: EvaluationConstants.UPDATE_EVALUATION_FAILURE,
          payload: { error: err.data.error },
        });
      });
  };
};
