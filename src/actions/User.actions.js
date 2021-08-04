import axios from '../helpers';
import {getUserConstants, updateUserConstants, uploadImage} from './constants';

export const getUserById = (id) => {
  return async (dispatch) => {
    dispatch({
      type: getUserConstants.GET_USER_REQUEST});
    const res = await axios.get(`/users/`+id);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: getUserConstants.GET_USER_SUCCESS,
        payload: {user: res.data},
      });
    } else {
      // echec
      dispatch({
        type: getUserConstants.GET_USER_FAILURE,
        payload: {error: res.data.error}
      });
    }
  };
};

export const UploadImage = (id,formData , options) => {
  return async (dispatch) => {
    dispatch({
      type: uploadImage.UPLOAD_IMAGE_REQUEST});
    const res = await axios.post(`/users/upload/`+id ,formData , options);
    console.log(res.data);
    if (res.status === 200) {
      // succes
      dispatch({
        type: uploadImage.UPLOAD_IMAGE_SUCCESS,
        payload: {image: res.data},
      });
    } else {
      // echec
      dispatch({
        type: uploadImage.GET_USER_FAILURE,
        payload: {error: res.data.error}
      });
    }
  };
};

