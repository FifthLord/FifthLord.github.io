
import React from "react";
import {
   sendMessageActionCreator,
   updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import { connect } from "react-redux"

/*
const DialogsContainer = (props) => {

   let state = props.store.getState();

   let sendMessage = () => {
      //props.sendMessage();
      //props.dispatch({ type: 'SEND-MESSAGE' })
      props.store.dispatch(sendMessageActionCreator())
   };

   let onMessageChange = (text) => {
      let action = updateNewMessageTextActionCreator(text);
      props.store.dispatch(action)
   };
   return (
      <Dialogs
         updateNewMessageText={onMessageChange}
         sendMessage={sendMessage}
         dialogsPage={state.dialogsPage}
      />
   );
}
*/

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   }
};

let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageText: (text) => {
         dispatch(updateNewMessageTextActionCreator(text))
      },
      sendMessage: () => {
         dispatch(sendMessageActionCreator())
      },
   }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;