import axios from '../helpers';
import {candidatConstants, updatecandidatConstants} from './constants';

export const getCandidatByIdUser = (id) => {
  console.log(id)
  return async (dispatch) => {
    dispatch({
      type: candidatConstants.GETBYIDUSER_CANDIDAT_REQUEST,
    });
    const res = await axios.get(`/candidats/getByIdUser/` + id)
      .then((res) => {
        // succes
        console.log(res.data);
        localStorage.setItem('Candidat', JSON.stringify(res.data));
        dispatch({
          type: candidatConstants.GETBYIDUSER_CANDIDAT_SUCCESS,
          payload: {candidat: res.data}
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: candidatConstants.GETBYIDUSER_CANDIDAT_FAILURE,
          payload: {error: err.response.data}
        });
      });
  };
};

export const updateCandidat = (id, candidat) => {
  return async (dispatch) => {
    dispatch({
      type: updatecandidatConstants.UPDATE_CANDIDAT_REQUEST,
    });
    await axios.put(`/candidats/` + id + `/update`, candidat)
      .then((res) => {
        // succes
        console.log(res.data);
        dispatch({
          type: updatecandidatConstants.UPDATE_CANDIDAT_SUCCESS,
          payload: {candidat: res.data},
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: updatecandidatConstants.UPDATE_CANDIDAT_FAILURE,
          payload: {error: err.data.error}
        });
      });
  };
};
/*
export const updateUser = (id, candidat) => {
  return async (dispatch) => {
    dispatch({
      type: updatecandidatConstants.UPDATE_CANDIDAT_REQUEST,
    });
    await axios
      .put(`/users/` + id + `/update`, candidat)
      .then((res) => {
        // succes
        console.log(res.data);
        dispatch({
          type: updatecandidatConstants.UPDATE_CANDIDAT_SUCCESS,
          payload: {candidat: res.data},
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: updatecandidatConstants.UPDATE_CANDIDAT_FAILURE,
          payload: {error: err.data.error}
        });
      });
  };
};*/
