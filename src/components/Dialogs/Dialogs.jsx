import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
   let path = "/dialogs/" + props.id
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={path} >{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return (
      <div className={s.messages}>
         {props.message}
      </div>
   )
}

const Dialogs = () => {

   let dialogsData = [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sacha' },
      { id: 5, name: 'Victor' },
      { id: 6, name: 'Valera' },
   ]

   let messagesData = [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are u?' },
      { id: 3, message: 'Yo' },
   ]

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
         </div>
         <div className={s.messages}>
            <Message message={messagesData[0].message} id={messagesData[0].id} />
            <Message message={messagesData[1].message} id={messagesData[1].id} />
            <Message message={messagesData[2].message} id={messagesData[2].id} />
         </div>
      </div>
   )
}

export default Dialogs;