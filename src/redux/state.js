

let state = {
   // props array for App/Profile/MyPosts/Post
   profilePage: {
      posts: [
         { id: 1, message: 'Hi, how are you?', likesCount: 5, },
         { id: 2, message: "It's my first post", likesCount: 10, },
      ],
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

export let addPost = (postMessage) => {
   let newPost = {
      id: 3,
      message: postMessage,
      likesCount: 0,
   };

   state.profilePage.posts.push(newPost);
}

export default state;