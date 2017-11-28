const initialState = {
  user: [],
  userLoginFetched: false,
  isFetching: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_USER_LOGIN':
      return {
        ...state,
        user: [],
        isFetching: true,
      };
    case 'FETCHING_USER_LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        user: action.data,
      };
    case 'FETCHING_USER_LOGIN_FAILURE':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};
