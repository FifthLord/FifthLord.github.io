import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

   let dialogsElements = props.dialogsPage.dialogs
      .map((d) => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = props.dialogsPage.messages
      .map((m) => <Message message={m.message} id={m.id} />)

   // add Ref in DOM through VirtualDOM 
   let newMessageElement = React.createRef();

   let sendMessage = () => {
      props.sendMessage();
   };

   let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.updateNewMessageText(text);
   };

   return (
      <div className={s.dialogsField}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            <div className={s.textarea}>
               <textarea
                  onChange={onMessageChange}
                  ref={newMessageElement}
                  value={props.dialogsPage.newMessageText}
               />
            </div>
            <div className={s.button}>
               <button onClick={sendMessage}>Send New Message</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;