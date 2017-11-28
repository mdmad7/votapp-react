import axios from 'axios';

export const getUser = () => {
  return {
    type: 'FETCHING_USER_LOGIN',
  };
};

export const getUserSuccess = data => {
  return {
    type: 'FETCHING_USER_LOGIN_SUCCESS',
    data,
  };
};

export const getUserFailure = () => {
  return {
    type: 'FETCHING_USER_LOGIN_FAILURE',
  };
};

export const fetchUser = url => {
  return dispatch => {
    dispatch(getUser());
    axios
      .get(url)
      .then(data => {
        dispatch(getUserSuccess(data.data));
      })
      .catch(err => {
        // console.log('err:', err);
        dispatch(getUserFailure());
      });
  };
};
