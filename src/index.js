

import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import { BrowserRouter } from "react-router-dom";
import StoreContext from './StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));//Вынес строку из под функции rerender
let rerenderEntireTree = (state) => {
   root.render(
      <BrowserRouter>
         <StoreContext.Provider value={store}>
            <React.StrictMode>
               <App
                  state={state}
                  dispatch={store.dispatch.bind(store)}
                  store={store}
               />
            </React.StrictMode>
         </StoreContext.Provider>
      </BrowserRouter>
   );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
   let state = store.getState()
   rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

