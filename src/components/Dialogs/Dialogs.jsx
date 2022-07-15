import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = () => {

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

   let dialogsElements = dialogs
      .map((d) => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = messages
      .map((m) => <Message message={m.message} id={m.id} />)

   return (
      <div className={s.dialogsField}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs;