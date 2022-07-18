import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// props array for App/Profile/MyPosts/Post
let posts = [
   { id: 1, message: 'Hi, how are you?', likesCount: 5, },
   { id: 2, message: "It's my first post", likesCount: 10, },
]

// props arrays for App/Dialogs/DialogItem-Message
let dialogs = [
   { id: 1, name: 'Dimych' },
   { id: 2, name: 'Andrey' },
   { id: 3, name: 'Sveta' },
   { id: 4, name: 'Sacha' },
   { id: 5, name: 'Victor' },
   { id: 6, name: 'Valera' },
];
let messages = [
   { id: 1, message: 'Hi' },
   { id: 2, message: 'How are u?' },
   { id: 3, message: 'Yo' },
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <App posts={posts} dialogs={dialogs} messages={messages} />
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
