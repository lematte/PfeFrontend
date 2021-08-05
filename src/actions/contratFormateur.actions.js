import axios from '../helpers';
import {ContratFormateurConstants} from './constants';

export const getContratsByIdCentre = (id) => {
  return async (dispatch) => {
    dispatch({
      type: ContratFormateurConstants.GET_CONTRAT_FORMATEURS_REQUEST,
    });
    const res = await axios.get(`/contrat_formateurs/centre/` + id)
    if (res.status === 200) {
      // succes
      dispatch({
        type: ContratFormateurConstants.GET_CONTRAT_FORMATEURS_SUCCESS,
        payload: {contrats: res.data},
      });
    } else {
      // echec
      dispatch({
        type: ContratFormateurConstants.GET_CONTRAT_FORMATEURS_FAILURE,
        payload: {error: res.data.error},
      });
    }
  };
};

