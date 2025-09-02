const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, isFetching: true, error: false };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, isFetching: false };
    case "LOGIN_FAILURE":
      return { ...state, isFetching: false, error: true };
    case "LOGOUT":
      return { user: null, isFetching: false, error: false };
    default:
      return state;
  }
};

export default AuthReducer;
