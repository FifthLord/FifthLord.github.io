import React from "react";

import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProfileContentArea from "./components/ProfileContentArea";

const App = () => {
   return (
      <div className="wrapper">
         <Header />
         <Navbar />
         <ProfileContentArea />
      </div >
   );
}




export default App;
