import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = initialState, action) => {
  //   console.log("Auth action: ", action);
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const setUserData = (id, email, login) => ({
  type: SET_USER_DATA,
  data: { id, email, login },
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
})

export const authMe = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    authAPI.authMe().then((response) => {
        dispatch(toggleIsFetching(false));

        if (response.data.resultCode === 0) {

          let email = response.data.data.email;
          let id = response.data.data.id;
          let login = response.data.data.login;
          dispatch(setUserData(id, email, login));
        }
      });
  }
}

export default authReducer;
