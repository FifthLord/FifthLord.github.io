
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let initialState = {
   dialogs: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sacha' },
      { id: 5, name: 'Victor' },
      { id: 6, name: 'Valera' },
   ],
   messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are u?' },
      { id: 3, message: 'Yo' },
   ],
   newMessageText: 'write some text',
};

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = {
            id: 4,
            message: state.newMessageText,
         };

         state.messages.push(newMessage);
         state.newMessageText = '';
         return state;

      case UPDATE_NEW_MESSAGE_TEXT:
         state.newMessageText = action.newText;
         return state;

      default:
         return state;
   }

}

export const sendMessageActionCreator = () => {
   return {
      type: SEND_MESSAGE,
   }
}

export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text,
   }
}



export default dialogsReducer;