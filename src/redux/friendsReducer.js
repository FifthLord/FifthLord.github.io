


let initialState = {
   friends: [
      { id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sacha' },
      { id: 5, name: 'Victor' },
      { id: 6, name: 'Valera' },
   ],
};

const friendsReducer = (state = initialState, action) => {
   switch (action.type) {

      default:
         return state;
   }
}


export default friendsReducer;