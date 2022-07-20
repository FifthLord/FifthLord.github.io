import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state.js'
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));//Вынес строку из функции rerender
export let rerenderEntireTree = (state) => {
   root.render(
      <BrowserRouter>
         <React.StrictMode>
            <App state={state}
               addPost={addPost}
               updateNewPostText={updateNewPostText} />
         </React.StrictMode>
      </BrowserRouter>
   );
}
