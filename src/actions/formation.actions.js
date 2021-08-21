import axios from "../helpers";
import {
  formationConstants,
  formationgetByIdCentreConstants,
  DeleteformationConstants,
  ADDformationConstants,
} from "./constants";

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
        payload: { Formation: res.data },
      });
    } else {
      // echec
      dispatch({
        type: formationConstants.GET_FORMATION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getFormationByName = (Libelle) => {
  return async (dispatch) => {
    dispatch({
      type: formationConstants.GET_FORMATION_BY_Name_REQUEST,
    });
    const res = await axios.get(`/formations/getByName/` + Libelle);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      localStorage.setItem("RRFormation", JSON.stringify(res.data));
      dispatch({
        type: formationConstants.GET_FORMATION_BY_Name_SUCCESS,
        payload: { RRFormation: res.data },
      });
    } else {
      // echec
      dispatch({
        type: formationConstants.GET_FORMATION_BY_Name_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const ADDFormation = (form) => {
  return async (dispatch) => {
    dispatch({
      type: ADDformationConstants.ADD_FORMATION_REQUEST,
    });
    const res = await axios.post(`/formations/add`, form);
    console.log(res.data);
    localStorage.setItem("res.data", JSON.stringify(res.data));

    if (res.status === 200) {
      // succes
      dispatch({
        type: ADDformationConstants.ADD_FORMATION_SUCCESS,
        payload: { formation: res.data },
      });
    } else {
      // echec
      dispatch({
        type: ADDformationConstants.ADD_FORMATION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getByIdCentre = (id) => {
  return async (dispatch) => {
    dispatch({
      type: formationgetByIdCentreConstants.GETByIdCentre_FORMATION_REQUEST,
    });
    const res = await axios.get(`/formations/getByIdCentre/` + id);
    console.log(res.data);
    localStorage.setItem("formationCenter", JSON.stringify(res.data));

    if (res.status === 200) {
      // succes
      dispatch({
        type: formationgetByIdCentreConstants.GETByIdCentre_FORMATION_SUCCESS,
        payload: { formations: res.data },
      });
    } else {
      // echec
      dispatch({
        type: formationgetByIdCentreConstants.GETByIdCentre_FORMATION_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: formationConstants.GET_FORMATION_BY_ID_REQUEST,
    });
    const res = await axios.get(`/formations/`+id);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: formationConstants.GET_FORMATION_BY_ID_SUCCESS,
        payload: { formation: res.data },
      });
    } else {
      // echec
      dispatch({
        type: formationConstants.GET_FORMATION_BY_ID_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const DeleteFormation = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DeleteformationConstants.DELETE_FORMATION_REQUEST,
    });
    const res = await axios
      .delete(`/formations/delete/` + id)
      .then((res) => {
        // succes
        console.log(res.data);
        dispatch({
          type: DeleteformationConstants.DELETE_FORMATION_SUCCESS,
          payload: { message: res.data },
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: DeleteformationConstants.DELETE_FORMATION_FAILURE,
          payload: { error: err.response.data },
        });
      });
  };
};


export const updateFormation = (id, formation) => {
  return async (dispatch) => {
    dispatch({
      type: formationConstants.UPDATE_FORMATION_REQUEST,
    });
    await axios
      .put(`/formations/update/` + id, formation)
      .then((res) => {
        // succes
        console.log(res.data);
        dispatch({
          type: formationConstants.UPDATE_FORMATION_SUCCESS,
          payload: { formation: res.data },
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: formationConstants.UPDATE_FORMATION_FAILURE,
          payload: { error: err.data.error },
        });
      });
  };
};
