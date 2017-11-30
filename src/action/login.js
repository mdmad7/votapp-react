import axios from 'axios';

export const requestLogin = creds => ({
  type: 'LOGIN_REQUEST',
  isFetching: true,
  isAuthenticated: false,
  creds,
});

export const receiveLogin = user => ({
  type: 'LOGIN_SUCCESS',
  isFetching: false,
  isAuthenticated: true,
  user,
});

export const loginError = message => ({
  type: 'LOGIN_FAILURE',
  isFetching: false,
  isAuthenticated: false,
  message,
});

export const requestLogout = () => ({
  type: 'LOGOUT_REQUEST',
  isFetching: true,
  isAuthenticated: true,
});

export const receiveLogout = () => ({
  type: 'LOGOUT_SUCCESS',
  isFetching: false,
  isAuthenticated: false,
});

export const loginUser = creds => dispatch => {
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(creds));

  return axios({
    method: 'post',
    url: 'http://localhost:4000/v1/api/user/login',
    data: {
      email: creds.email,
      password: creds.password,
    },
  })
    .then(response => {
      console.log(response);
      if (response.data.error) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(loginError(response.data.error));
        // return Promise.reject(response.data);
      } else {
        // If login was successful, set the token in local storage
        localStorage.setItem('id_token', response.data.token);

        // Dispatch the success action
        dispatch(receiveLogin(response.data));
      }
    })
    .catch(err => console.log(err));
};

// Logs the user out
export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  localStorage.removeItem('id_token');
  dispatch(receiveLogout());
};
