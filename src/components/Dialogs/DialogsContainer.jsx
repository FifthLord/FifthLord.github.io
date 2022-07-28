
import React from "react";
import {
   sendMessageActionCreator,
   updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

   let state = props.store.getState();

   let sendMessage = () => {
      //props.sendMessage();
      //props.dispatch({ type: 'SEND-MESSAGE' })
      props.store.dispatch(sendMessageActionCreator())
   };

   let onMessageChange = (text) => {
      //let text = newMessageElement.current.value;
      /*props.dispatch({
         type: 'UPDATE-NEW-MESSAGE-TEXT',
         newText: text,
      })*/
      let action = updateNewMessageTextActionCreator(text);
      props.store.dispatch(action)
   };

   return (
      <Dialogs
         updateNewMessageText={onMessageChange}
         sendMessage={sendMessage}
         dialogsPage={state.dialogsPage}
      />);
}

export default DialogsContainer;