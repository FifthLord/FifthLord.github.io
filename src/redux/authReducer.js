
import { authAPI } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
   id: null,
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
            isAuth: true,
         };

      default:
         return state;
   }
};

export const setAuthUserDataAC = (id, email, login, isAuth) => {
   return {
      type: SET_USER_DATA,
      data: {
         id,
         email,
         login,
         isAuth,
      },
   }
};

export const getAuthUserDataThunkCreator = () => {
   return (dispatch) => {
      authAPI.getAuth()
         .then(response => {
            if (response.data.resultCode === 0) {
               let { email, id, login, } = response.data.data;
               dispatch(setAuthUserDataAC(email, id, login, true));
            }
         });
   }
}

export const loginTC = (email, password, rememberMe,) => {
   return (dispatch) => {
      authAPI.login(email, password, rememberMe)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getAuthUserDataThunkCreator());
            }
         });
   }
}

export const logoutTC = () => {
   return (dispatch) => {
      authAPI.logout()
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setAuthUserDataAC(null, null, null, false));
            }
         });
   }
}


export default authReducer;
