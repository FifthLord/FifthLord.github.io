import React from "react";

import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends.jsx";
import { Route, Routes } from "react-router-dom";


const App = (props) => {

   return (

      <div className="wrapper">
         <Header />
         <Navbar navbarPage={props.state.friendsPage} />
         <div className="content" >
            <Routes>
               <Route path="/dialogs/*" element={<Dialogs
                  dialogsPage={props.state.dialogsPage}
                  dispatch={props.dispatch}
               />} />
               <Route path="/profile" element={<Profile
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
               />} />
               <Route path="/news" element={<News />} />
               <Route path="/music" element={<Music />} />
               <Route path="/settings" element={<Settings />} />
               <Route path="/friends/*" element={<Friends friendsPage={props.state.friendsPage} />} />
            </Routes>
         </div>
      </div >

   );
}


export default App;
