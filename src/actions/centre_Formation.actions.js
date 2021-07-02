import axios from '../helpers';
import {centre_formationConstants, GETBYIDUSERCENTREConstants} from './constants';

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


export const getCentreByIdUser = (id) => {
  console.log(id)
  return async (dispatch) => {
    dispatch({
      type: GETBYIDUSERCENTREConstants.GETBYIDUSER_CENTRE_REQUEST,
    });
     const res = await axios.get(`/centre_formations/getByIdUser/`+id)
      .then((res) => {
        // succes
        console.log(res.data);
        localStorage.setItem('Centre', JSON.stringify(res.data));
        dispatch({
          type: GETBYIDUSERCENTREConstants.GETBYIDUSER_CENTRE_SUCCESS,
          payload: {centre: res.data}
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: GETBYIDUSERCENTREConstants.GETBYIDUSER_CENTRE_FAILURE,
          payload: {error: err.response.data}
        });
      });
  };
};

