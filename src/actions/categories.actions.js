import axios from '../helpers';
import {CategoriesConstants} from './constants';

export const getCategories = () => {
  return async (dispatch) => {
    dispatch({
      type: CategoriesConstants.GET_CATEGORIES_REQUEST});
    const res = await axios.get(`/categories`);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: CategoriesConstants.GET_CATEGORIES_SUCCESS,
        payload: {categories: res.data},
      });
    } else {
      // echec
      dispatch({
        type: CategoriesConstants.GET_CATEGORIES_FAILURE,
        payload: {error: res.data.error}
      });
    }
  };
};


export const getCategoriesByLibelle = (libelle) => {
  return async (dispatch) => {
    dispatch({
      type: CategoriesConstants.GET_BY_NOM_CATEGORIES_REQUEST,
    });
    const res = await axios.get(`/categories/`+libelle);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: CategoriesConstants.GET_BY_NOM_CATEGORIES_SUCCESS,
        payload: {categories: res.data},
      });
    } else {
      // echec
      dispatch({
        type: CategoriesConstants.GET_BY_NOM_CATEGORIES_FAILURE,
        payload: {error: res.data.error},
      });
    }
  };
};

export const ADDCategorie = (categorie) => {
  return async (dispatch) => {
    dispatch({
      type: CategoriesConstants.ADD_CATEGORIES_REQUEST,
    });
    const res = await axios.post(`/categories/add`,categorie);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: CategoriesConstants.ADD_CATEGORIES_SUCCESS,
        payload: {categorie: res.data},
      });
    } else {
      // echec
      dispatch({
        type: CategoriesConstants.DELETE_CATEGORIES_FAILURE,
        payload: {error: res.data.error},
      });
    }
  };
};


export const updatecategorie = (id, categorie) => {
  return async (dispatch) => {
    dispatch({
      type: CategoriesConstants.UPDATE_CATEGORIES_REQUEST,
    });
    await axios
      .put(`/categories/update/`+ id , categorie)
      .then((res) => {
        // succes
        console.log(res.data);
        dispatch({
          type: CategoriesConstants.UPDATE_CATEGORIES_SUCCESS,
          payload: {categorie : res.data },
        });
      })
      .catch((err) => {
        // echec
        dispatch({
          type: CategoriesConstants.UPDATE_CATEGORIES_FAILURE,
          payload: { error: err.data.error },
        });
      });
  };
};

export const DeleteCategorie = (id) => {
  return async (dispatch) => {
    dispatch({
      type: CategoriesConstants.DELETE_CATEGORIES_REQUEST,
    });
    const res = await axios.delete(`/categories/delete/`+id)
    .then((res) => {
      // succes
      console.log(res.data);
      dispatch({
        type: CategoriesConstants.DELETE_CATEGORIES_SUCCESS,
        payload: {message: res.data}
      });
    })
    .catch((err) => {
      // echec
      dispatch({
        type: CategoriesConstants.GET_BY_NOM_CATEGORIES_FAILURE,
        payload: {error: err.response.data}
      });
    });
};
};