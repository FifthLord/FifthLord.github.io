import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";



const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogsElements = state.dialogs
      .map((d) => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = state.messages
      .map((m) => <Message message={m.message} id={m.id} />)

   let newMessageElement = React.createRef();

   let sendMessage = () => {
      props.sendMessage();
   };

   let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.updateNewMessageText(text)
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