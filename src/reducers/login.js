// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export default (
  state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token'),
    token: null,
    user: null,
  },
  action,
) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      });
    case 'LOGIN_SUCCESS':
      console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        token: action.user.token,
      });
    case 'LOGIN_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    default:
      return state;
  }
};
