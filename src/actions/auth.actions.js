import {authConstants} from './constants';
import axios from '../helpers';
import {getCandidatByIdUser} from './index';

export const login = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });
    const res = await axios
      .post(`/login`, user)
      .then((res) => {
        const {token, user} = res.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        if (user.role === 'candidat') {
          dispatch(getCandidatByIdUser(user._id));
        }
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: authConstants.LOGIN_FAILURE,
          payload: {
            error: err.response.data,
          },
        });
      });
  };
};

export const signout = () => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGOUT_REQUEST});
    const res = await axios.post(`/signout`);
    if (res.status === 200) {
      localStorage.clear();
      dispatch({
        type: authConstants.LOGOUT_SUCCESS,
      });
    } else {
      dispatch({
        type: authConstants.LOGOUT_FAILURE,
        payload: {error: res.data.error},
      });
    }
  };
};