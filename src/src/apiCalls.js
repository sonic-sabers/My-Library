import axios from 'axios';

function wait(ms, value) {
  return new Promise(resolve => setTimeout(resolve, ms, value));
}
export const loginCall = async (userCredential, dispatch) => {
  dispatch({type: 'LOGIN_START'});
  try {
    const res = await axios
      .post('/auth/login', userCredential)
      .then(value =>
        wait(1000, value),
      ); /* added the manual delay to axios data fetch using the wait func above */
    dispatch({type: 'LOGIN_SUCCESS', payload: res.data});
  } catch (err) {
    dispatch({type: 'LOGIN_FAILURE', payload: err});
  }
};
