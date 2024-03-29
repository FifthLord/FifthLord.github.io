

import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/reduxStore';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));//Вынес строку из под функции rerender

let rerenderEntireTree = (state) => {
   root.render(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <React.StrictMode>
            <Provider store={store}>
               <App
                  state={state} //без него не рендериться страница ВТФ. 
               //dispatch={store.dispatch.bind(store)}
               //store={store}
               />
            </Provider>
         </React.StrictMode>
      </BrowserRouter>
   );
}

rerenderEntireTree(store.getState());


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

