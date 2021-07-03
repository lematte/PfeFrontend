import axios from '../helpers';
import {
    SallegetByIdCentreConstants,
    DeleteSalleConstants,
    AddSalleConstants,
    UpdateSalleConstants
} from './constants';

export const getSalleByIdCentre = (id) => {
    return async (dispatch) => {
      dispatch({
        type: SallegetByIdCentreConstants.GETByIdCentre_SALLE_REQUEST,
      });
      const res = await axios.get(`/salles/getByIdCentre/`+ id);
      console.log(res.data);
      if (res.status === 200) {
        // succes
        dispatch({
          type: SallegetByIdCentreConstants.GETByIdCentre_SALLE_SUCCESS,
          payload: {salles: res.data},
        });
      } else {
        // echec
        dispatch({
          type: SallegetByIdCentreConstants.GETByIdCentre_SALLE_FAILURE,
          payload: {error: res.data.error},
        });
      }
    };
  };
  

  export const DeleteSalle = (id) => {
    return async (dispatch) => {
      dispatch({
        type: DeleteSalleConstants.DELETE_SALLE_REQUEST,
      });
      const res = await axios.delete(`/salles/delete/`+id)
      .then((res) => {
        // succes
        console.log(res.data);
        dispatch({
          type: DeleteSalleConstants.DELETE_SALLE_SUCCESS,
          payload: {message: res.data}
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: DeleteSalleConstants.DELETE_SALLE_FAILURE,
          payload: {error: err.response.data}
        });
      });
  };
  };

  
export const ADDSalle = (salle) => {
    return async (dispatch) => {
      dispatch({
        type: AddSalleConstants.ADD_SALLE_REQUEST,
      });
      const res = await axios.post(`/salles/add`,salle);
      console.log(res.data);
      if (res.status === 200) {
        // succes
        dispatch({
          type: AddSalleConstants.ADD_SALLE_SUCCESS,
          payload: {salle: res.data},
        });
      } else {
        // echec
        dispatch({
          type: AddSalleConstants.ADD_SALLE_FAILURE,
          payload: {error: res.data.error},
        });
      }
    };
  };
  
export const updateSalle = (id, candidat) => {
    return async (dispatch) => {
      dispatch({
        type: UpdateSalleConstants.UPDATE_SALLE_REQUEST,
      });
      await axios.put(`/salles/update/`+id, candidat)
        .then((res) => {
          // succes
          console.log(res.data);
          dispatch({
            type: UpdateSalleConstants.UPDATE_SALLE_SUCCESS,
            payload: {salle: res.data},
          });
        })
        .catch((err) => {
          // echec
          dispatch({
            type: UpdateSalleConstants.UPDATE_SALLE_FAILURE,
            payload: {error: err.data.error}
          });
        });
    };
  };

/*
export const getFormation = () => {
  return async (dispatch) => {
    dispatch({
      type: formationConstants.GET_FORMATION_REQUEST,
    });
    const res = await axios.get(`/formations`);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: formationConstants.GET_FORMATION_SUCCESS,
        payload: {Formation: res.data},
      });
    } else {
      // echec
      dispatch({
        type: formationConstants.GET_FORMATION_FAILURE,
        payload: {error: res.data.error},
      });
    }
  };
};

*/