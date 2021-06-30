import axios from '../helpers';
import {formationConstants} from './constants';

export const getFormation = () => {
  return async (dispatch) => {
    dispatch({
      type: formationConstants.GET_FORMATION_REQUEST});
    const res = await axios.get(`/formations`);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: formationConstants.GET_FORMATION_SUCCESS,
        payload: {Formation: res.data}
      });
    } else {
      // echec
      dispatch({
        type: formationConstants.GET_FORMATION_FAILURE,
        payload: {error: res.data.error}
      });
    }
  }
};
