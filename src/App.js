import React from "react";

import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { Route, Routes } from "react-router-dom";


const App = (props) => {

   return (

      <div className="wrapper">
         <Header />
         <Navbar navbarPage={props.state.friendsPage} />
         <div className="content" >
            <Routes>
               <Route path="/dialogs/*" element={<DialogsContainer />} />
               <Route path="/profile" element={<Profile />} />
               <Route path="/users" element={<UsersContainer />} />

               <Route path="/news" element={<News />} />
               <Route path="/music" element={<Music />} />
               <Route path="/settings" element={<Settings />} />
               <Route path="/friends/*" element={<Friends
                  store={props.store}
               //friendsPage={props.state.friendsPage}
               />} />
            </Routes>
         </div>
      </div >

   );
}


export default App;
