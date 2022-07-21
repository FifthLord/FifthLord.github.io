import { rerenderEntireTree } from '../render'

let state = {
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
}

//addPost block start
export let addPost = () => {
   let newPost = {
      id: 3,
      message: state.profilePage.newPostText,
      likesCount: 0,
   };

   state.profilePage.posts.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
}
//addPost block end


//addMessage block start
export let sendMessage = () => {
   let newMessage = {
      id: 4,
      message: state.dialogsPage.newMessageText,
   };

   state.dialogsPage.messages.push(newMessage);
   state.dialogsPage.newMessageText = '';
   rerenderEntireTree(state);
}

export let updateNewMessageText = (newText) => {
   state.dialogsPage.newMessageText = newText;
   rerenderEntireTree(state);
}
//addMessage block end


export default state;