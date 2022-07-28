import React from "react";
import { NavLink } from "react-router-dom";
//import Friend from "../Friends/Friend/Friend";
import s from "./Navbar.module.css";


const Navbar = (props) => {
   /*
      let friendsElements = props.navbarPage.friends
         .map((f) => <Friend name={f.name} id={f.id} />)
   */
   // add {friendsElements} in NavLink to="friends" if u wont list with friends in navbar
   return (
      <nav className={s.nav}>
         <div>
            <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
         </div>
         <div>
            <NavLink to="/dialogs" className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
         </div>
         <div>
            <NavLink to="/news" className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
         </div>
         <div>
            <NavLink to="/music" className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
         </div>
         <div>
            <NavLink to="/settings" className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
         </div>
         <div>
            <NavLink to="/friends" className={navData => navData.isActive ? s.active : s.item}>
               Friends
            </NavLink>
         </div>
      </nav>
   );
}

export default Navbar