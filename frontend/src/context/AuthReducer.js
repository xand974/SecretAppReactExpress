const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };

    case "Follow":
      return {
        //on fait une copie du state
        //ca veut dire user : null , isFetching : false,
        //             error: false mais en simplifier
        ...state,

        //on change le user, on en fait une copie
        //on change le following en recuperant tous les followers + en ajoutant
        //action.payload = userId (dans action)
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };

    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          following: state.user.following.filter(
            (user) => user._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
