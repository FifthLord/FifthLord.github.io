
const SEND_MESSAGE = 'SEND-MESSAGE';


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
};

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case SEND_MESSAGE: {
         let newMessage = {
            id: 4,
            message: action.newMessageText,
         };
         return {
            ...state,
            messages: [...state.messages, (newMessage)],
         };
      }

      default:
         return state;
   }
}


export const sendMessageActionCreator = (newMessageText) => {
   return {
      type: SEND_MESSAGE,
      newMessageText
   }
}

export default dialogsReducer;