import React from "react";

import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = (props) => {

   return (
      <BrowserRouter>
         <div className="wrapper">
            <Header />
            <Navbar />
            <div className="content" >
               <Routes>
                  <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage} />} />
                  <Route path="/profile" element={<Profile profilePage={props.state.profilePage} />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
               </Routes>
            </div>
         </div >
      </BrowserRouter>
   );
}




export default App;
