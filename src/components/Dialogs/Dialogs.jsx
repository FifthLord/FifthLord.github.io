import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';


const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogsElements = state.dialogs
      .map((d) => <DialogItem name={d.name} id={d.id} />);

   let messagesElements = state.messages
      .map((m) => <Message message={m.message} id={m.id} />)

   let addNewMessage = (values) => {
      props.sendMessage(values.newMessageText);
   };

   if (!props.isAuth) return <Navigate to={"/login"} />;

   return (
      <div className={s.dialogsField}>
         <div className={s.dialogsItems}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
            <AddMessageReduxForm onSubmit={addNewMessage} />
         </div>
      </div>
   )
}

const AddMessageForm = (props) => {

   return (
      <form
         className={s.textarea}
         onSubmit={props.handleSubmit}
      >
         <div>
            <Field
               component={"textarea"}
               placeholder={"Enter your message"}
               name={"newMessageText"}
            />
         </div>
         <div className={s.button}>
            <button>Send New Message</button>
         </div>
      </form>
   )
}

const AddMessageReduxForm = reduxForm({
   form: 'dialogAddMessageForm'
})(AddMessageForm)


export default Dialogs;