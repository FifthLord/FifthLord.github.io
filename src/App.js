import React, { Component } from "react";

import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer, { withRouter } from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import Friends from "./components/Friends/Friends";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { initializeApp } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from "redux";


class App extends Component {
   componentDidMount() {
      this.props.initializeApp();
   }
   render() {
      if (!this.props.initialized) {
         return <Preloader />
      }

      return (
         <div className="wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="content" >
               <Routes>
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path="/profile" element={<ProfileContainer />}>
                     <Route path=":userId" element={<ProfileContainer />} />
                  </Route>
                  <Route path="/users" element={<UsersContainer />} />
                  <Route path="/login" element={<Login />} />

                  <Route path="/news" element={<News />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
               </Routes>
            </div>
         </div >
      );
   }
}


const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
});

export default compose(
   withRouter,
   connect(mapStateToProps, { initializeApp }))(App);

//* APP when it was function component
/*const App = (props) => {
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
               <Route path="/login" element={<Login />} />

               <Route path="/news" element={<News />} />
               <Route path="/music" element={<Music />} />
               <Route path="/settings" element={<Settings />} />
               <Route path="/friends/*" element={<Friends
                  store={props.store}
               />} />
            </Routes>
         </div>
      </div >
   );
}
*/