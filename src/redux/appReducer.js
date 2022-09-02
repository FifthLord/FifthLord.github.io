
import { getAuthUserDataThunkCreator } from './authReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
   initialized: false,
};


const appReducer = (state = initialState, action) => {

   switch (action.type) {
      case INITIALIZED_SUCCESS:
         return {
            ...state,
            initialized: true,
         };

      default:
         return state;
   }
};

export const initializedSuccessAC = () => {
   return {
      type: INITIALIZED_SUCCESS,
   }
};

export const initializeApp = () => (dispatch) => {
   let promise = dispatch(getAuthUserDataThunkCreator());

   Promise.all([promise])
      .then(() => {
         dispatch(initializedSuccessAC());
      })
}

export default appReducer;