import React from "react";
import Friend from "./Friend/Friend.jsx";
import s from "./Friends.module.css";

const Friends = (props) => {

   let friendsElements = props.friendsPage.friends
      .map((f) => <Friend name={f.name} id={f.id} />)

   return (
      <div className={s.friendsField}>
         <div className={s.friendsItems}>
            {friendsElements}
         </div>
      </div>
   )
}

export default Friends;