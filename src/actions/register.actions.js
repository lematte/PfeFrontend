import axios from '../helpers';
import {registerConstants} from './constants';
// signup user
export const signup = (user) => {
  console.log(user);
  return async (dispatch) => {
    dispatch({
      type: registerConstants.REGISTER_REQUEST,
    });

    const res = await axios.post(`/register`, user)
      .then((res) =>
        dispatch({
          type: registerConstants.REGISTER_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) => {
        dispatch({
          type: registerConstants.REGISTER_FAILURE,
          // {error : res.data.error}
        });
      });
  };
};
