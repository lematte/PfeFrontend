import axios from '../helpers';
import {centre_formationConstants} from './constants';

export const getcentreFormation = () => {
  return async (dispatch) => {
    dispatch({type: centre_formationConstants.GET_CENTRE_FORMATION_REQUEST});
    const res = await axios.get(`/centre_formations`);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: centre_formationConstants.GET_CENTRE_FORMATION_SUCCESS,
        payload: {centre_formation: res.data},
      });
    } else {
      // echec
      dispatch({
        type: centre_formationConstants.GET_CENTRE_FORMATION_FAILURE,
        payload: {error: res.data.error},
      });
    }
  };
};
