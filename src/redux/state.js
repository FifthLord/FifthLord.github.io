
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
   _state: {
      // props array for App/Profile/MyPosts/Post
      profilePage: {
         posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 5, },
            { id: 2, message: "It's my first post", likesCount: 10, },
         ],
         newPostText: 'write some text',
      },
      // props arrays for App/Dialogs/DialogItem-Message
      dialogsPage: {
         dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sacha' },
            { id: 5, name: 'Victor' },
            { id: 6, name: 'Valera' },
         ],
         messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are u?' },
            { id: 3, message: 'Yo' },
         ],
         newMessageText: 'write some text',
      },
      // props arrays for App/Friends/Friend
      friendsPage: {
         friends: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sacha' },
            { id: 5, name: 'Victor' },
            { id: 6, name: 'Valera' },
         ],
      },
   },
   _callsubscrible() {
      console.log('State changed');
   },

   getState() {
      return this._state;
   },

   subscribe(observer) {
      this._callsubscrible = observer //патерн observer Наблюдатель, (pablisher-subscriber)
   },

   dispatch(action) {
      if (action.type === ADD_POST) {
         let newPost = {
            id: 3,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
         };

         this._state.profilePage.posts.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callsubscrible(this._state);

      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.newText;
         this._callsubscrible(this._state);
      } else if (action.type === SEND_MESSAGE) {
         let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText,
         };

         this._state.dialogsPage.messages.push(newMessage);
         this._state.dialogsPage.newMessageText = '';
         this._callsubscrible(this._state);
      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
         this._state.dialogsPage.newMessageText = action.newText;
         this._callsubscrible(this._state);
      }
   }
}

//ActionCreator funktions
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

export const sendMessageActionCreator = () => {
   return {
      type: SEND_MESSAGE,
   }
}

export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text,
   }
}



export default store;

window.store = store;

// old state's methods
/*
   //addPost block start
   addPost() {
      let newPost = {
         id: 3,
         message: this._state.profilePage.newPostText,
         likesCount: 0,
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callsubscrible(this._state);
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callsubscrible(this._state);
   },
   //addPost block end

   //addMessage block start
   sendMessage() {
      let newMessage = {
         id: 4,
         message: this._state.dialogsPage.newMessageText,
      };

      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callsubscrible(this._state);
   },
   updateNewMessageText(newText) {
      this._state.dialogsPage.newMessageText = newText;
      this._callsubscrible(this._state);
   },
   //addMessage block end
   */