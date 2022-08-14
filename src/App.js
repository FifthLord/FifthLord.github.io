import React from "react";

import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { Route, Routes } from "react-router-dom";


const App = (props) => {
   return (
      <div className="wrapper">
         <HeaderContainer />
         <Navbar navbarPage={props.state.friendsPage} />
         <div className="content" >
            <Routes>
               <Route path="/dialogs/*" element={<DialogsContainer />} />
               <Route path="/profile" element={<ProfileContainer />}>
                  <Route path=":userId" element={<ProfileContainer />} />
               </Route>
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
