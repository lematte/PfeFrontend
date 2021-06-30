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
