import axios from '../helpers';
import {ContratgetByIdFormationConstants,ContratConstants } from './constants';

export const getContratsByIdFormation = (id, donnees) => {
  return async (dispatch) => {
    dispatch({
      type: ContratgetByIdFormationConstants.GETByIdFORMATION_CONTRAT_REQUEST,
    });
    const res = await axios.get(`/contrat_formations/getByIdFormation/` + id);
    try {
      donnees.push(res.data);

      console.log(donnees);
      localStorage.setItem('contratformation',JSON.stringify(donnees));

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

export const DeleteContrat = (id) => {
  return async (dispatch) => {
    dispatch({
      type: ContratConstants.DELETE_CONTRAT_REQUEST,
    });
    console.log(id)
    const res = await axios
      .delete(`/contrat_formations/delete/` + id )
      .then((res) => {
        // succes
        console.log('true' +res.data);
        dispatch({
          type: ContratConstants.DELETE_CONTRAT_SUCCESS,
          payload: { message: res.data },
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: ContratConstants.DELETE_CONTRAT_FAILURE,
          payload: { error: err.response.data },
        });
      });
  };
};
