
import { userAPI } from '../api/api';
import { profileAPI } from '../api/api';


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 5, },
      { id: 2, message: "It's my first post", likesCount: 10, },
   ],
   profile: null,
   status: "",
};

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 3,
            message: action.newPostText,
            likesCount: 0,
         };
         return {
            ...state,
            newPostText: '',
            posts: [...state.posts, (newPost)],
         };
      }

      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile,
         };
      }

      case SET_STATUS: {
         return {
            ...state,
            status: action.status,
         };
      }

      default:
         return state;
   }
}

export const addPostActionCreator = (newPostText) => {
   return {
      type: ADD_POST,
      newPostText
   }
}

export const setUserProfileAC = (profile) => {
   return {
      type: SET_USER_PROFILE,
      profile,
   }
}

export const setStatusAC = (status) => {
   return {
      type: SET_STATUS,
      status,
   }
}

export const getUserProfileThunkCreator = (userId) => {
   return (dispatch) => {

      userAPI.getProfile(userId)
         .then(response => {
            dispatch(setUserProfileAC(response.data));
         });
   };
}

export const getStatusTC = (userId) => {
   return (dispatch) => {

      profileAPI.getStatus(userId)
         .then(response => {
            dispatch(setStatusAC(response.data));
         });
   };
}

export const updateStatusTC = (status) => {
   return (dispatch) => {

      profileAPI.updateStatus(status)
         .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(setStatusAC(status));
            }
         });
   };
}


export default profileReducer;