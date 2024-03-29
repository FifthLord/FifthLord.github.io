
import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";


const SET_USER_DATA = 'auth/SET_USER_DATA';


let initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
};


const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_USER_DATA:
         return {
            ...state,
            ...action.data,
         };

      default:
         return state;
   }
};

export const setAuthUserDataAC = (userId, email, login, isAuth) => {
   return {
      type: SET_USER_DATA,
      data: {
         userId,
         email,
         login,
         isAuth,
      },
   }
};

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
   let response = await authAPI.me();

   if (response.data.resultCode === 0) {
      let { userId, email, login, } = response.data.data;
      dispatch(setAuthUserDataAC(userId, email, login, true));
   }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
   let response = await authAPI.login(email, password, rememberMe);

   if (response.data.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator());
   } else {
      let message = response.data.messages.length > 0
         ? response.data.messages[0]
         : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
   }
}

export const logout = () => async (dispatch) => {
   let response = await authAPI.logout();

   if (response.data.resultCode === 0) {
      dispatch(setAuthUserDataAC(null, null, null, false));
   }
}


export default authReducer;