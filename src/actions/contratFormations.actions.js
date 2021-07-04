import axios from '../helpers';
import {ContratgetByIdFormationConstants} from './constants';

export const getContratsByIdFormation = (id, donnees) => {
  return async (dispatch) => {
    dispatch({
      type: ContratgetByIdFormationConstants.GETByIdFORMATION_CONTRAT_REQUEST,
    });
    const res = await axios.get(`/contrat_formations/getByIdFormation/` + id);
    try {
      donnees.push(res.data);

      console.log(donnees);
      localStorage.setItem('contratformation',  JSON.stringify(donnees));

    } catch (err) {
      console.log(err);
    }

    if (res.status === 200) {
      // succes
      dispatch({
        type: ContratgetByIdFormationConstants.GETByIdFORMATION_CONTRAT_SUCCESS,
        payload: {contrats: res.data},
      });
    } else {
      // echec
      dispatch({
        type: ContratgetByIdFormationConstants.GETByIdFORMATION_CONTRAT_FAILURE,
        payload: {error: res.data.error},
      });
    }
  };
};
