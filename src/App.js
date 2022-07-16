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

const App = () => {

   let posts = [
      { id: 1, message: 'Hi, how are you?', likesCount: 5, },
      { id: 2, message: "It's my first post", likesCount: 10, },
   ]

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

   return (
      <BrowserRouter>
         <div className="wrapper">
            <Header />
            <Navbar />
            <div className="content" >
               <Routes>
                  <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} messages={messages} />} />
                  <Route path="/profile" element={<Profile posts={posts} />} />
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
