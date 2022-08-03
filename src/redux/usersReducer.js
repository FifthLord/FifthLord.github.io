
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW ';
const SET_USERS = 'SET-USERS';


let initialState = {
   users: [
      {
         id: 1,
         photoUrl: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-6.jpg',
         followed: false,
         fullname: 'Mykola',
         status: "I am a boss",
         location: { city: 'Kyiv', country: 'Ukraine', }
      },
      {
         id: 2,
         photoUrl: 'https://external-preview.redd.it/t5IBAQ3gaehTHCIiqINnJZ-BOpsXVkRQQ1tzjS0IP84.jpg?auto=webp&s=ad45db84dfdc35658eba374db5f5de34aabbd555',
         followed: true,
         fullname: 'Sasha',
         status: "I am a boss too",
         location: { city: 'London', country: 'England', }
      },
      {
         id: 3,
         photoUrl: 'https://i.pinimg.com/originals/e8/ec/d4/e8ecd48d9f71e8d75c5c7057105afda4.jpg',
         followed: false,
         fullname: 'Andrew',
         status: "I am a big boss",
         location: { city: 'Warsaw', country: 'Poland', }
      },

   ],
};


const usersReducer = (state = initialState, action) => {

   switch (action.type) {
      case FOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u;
            }),
         };
      }

      case UNFOLLOW: {
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u;
            }),
         };
      }

      case SET_USERS: {
         return {
            ...state,
            users: [...state.users, ...action.users],
         };
      }

      default:
         return state;
   }
};

export const followAC = (userId) => {
   return {
      type: FOLLOW,
      userId
   }
};

export const unfollowAC = (userId) => {
   return {
      type: UNFOLLOW,
      userId
   }
};

export const setUsersAC = (users) => {
   return {
      type: SET_USERS,
      users
   }
};


export default usersReducer;


//old date from arrow
