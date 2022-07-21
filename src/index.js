

import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/state';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));//Вынес строку из функции rerender
let rerenderEntireTree = (state) => {
   root.render(
      <BrowserRouter>
         <React.StrictMode>
            <App
               state={state}
               addPost={store.addPost.bind(store)}
               updateNewPostText={store.updateNewPostText.bind(store)}
               sendMessage={store.sendMessage.bind(store)}
               updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
         </React.StrictMode>
      </BrowserRouter>
   );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
