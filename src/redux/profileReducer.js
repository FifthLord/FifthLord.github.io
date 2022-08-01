
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
   posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 5, },
      { id: 2, message: "It's my first post", likesCount: 10, },
   ],
   newPostText: 'write some text',
};

const profileReducer = (state = initialState, action) => {

   let stateCopy = {
      ...state,
      posts: [...state.posts],
   };


   switch (action.type) {
      case ADD_POST: {
         let newPost = {
            id: 3,
            message: state.newPostText,
            likesCount: 0,
         };

         stateCopy.posts.push(newPost);
         stateCopy.newPostText = '';
         return stateCopy;
         //state.posts.push(newPost);
         //state.newPostText = '';
         //return state;
      }

      case UPDATE_NEW_POST_TEXT: {
         stateCopy.newPostText = action.newText;
         return stateCopy;
         //state.newPostText = action.newText;
         //return state;
      }

      default:
         return state;
   }
}

export const addPostActionCreator = () => {
   return {
      type: ADD_POST,
   }
}

export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
   }
}


export default profileReducer;