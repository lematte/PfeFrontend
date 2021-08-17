import axios from '../helpers';
import {formateurConstants} from './constants';

export const getFormateur = () => {
  return async (dispatch) => {
    dispatch({
      type: formateurConstants.GET_FORMATEUR_REQUEST});
    const res = await axios.get(`/formateurs`);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      localStorage.setItem('formateurs',JSON.stringify(res.data));
      dispatch({
        type: formateurConstants.GET_FORMATEUR_SUCCESS,
        payload: {Formateur: res.data},
      });
    } else {
      // echec
      dispatch({
        type: formateurConstants.GET_FORMATEUR_FAILURE,
        payload: {error: res.data.error}
      });
    }
  };
};


export const getFormateurByName = (Prenom) => {
  return async (dispatch) => {
    dispatch({
      type: formateurConstants.GET_BY_PRENOM_FORMATEUR_REQUEST,
    });
    const res = await axios.get(`/formateurs/getBy/`+Prenom);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: formateurConstants.GET_BY_PRENOM_FORMATEUR_SUCCESS,
        payload: {formateur: res.data},
      });
    } else {
      // echec
      dispatch({
        type: formateurConstants.GET_BY_PRENOM_FORMATEUR_FAILURE,
        payload: {error: res.data.error},
      });
    }
  };
};