import React from "react";
import s from "./../Friends.module.css";
import { NavLink } from "react-router-dom";

/*
const Friend = (props) => {

   return (
      <div className={s.friend} id={props.id}>
         {props.name}
      </div>
   )
}
*/

const Friend = (props) => {
   let path = "/friends/" + props.id;
   return (
      <div>
         <NavLink to={path} className={friendData => friendData.isActive ? s.active : s.friend} >{props.name}</NavLink>
      </div>
   )
}


export default Friend;