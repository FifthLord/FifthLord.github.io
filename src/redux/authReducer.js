
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

export const setAuthUserDataAC = (id, email, login) => {
   return {
      type: SET_USER_DATA,
      data: {
         id,
         email,
         login,
      },
   }
};

export const getAuthUserDataThunkCreator = () => {
   return (dispatch) => {
      authAPI.getAuth()
         .then(response => {
            if (response.data.resultCode === 0) {
               let { email, id, login, } = response.data.data;
               dispatch(setAuthUserDataAC(email, id, login,));
            }
         });
   }
}


export default authReducer;
