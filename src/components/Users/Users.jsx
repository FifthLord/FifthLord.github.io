

import * as axios from "axios";
import React from "react";
import s from './Users.module.css'
import userDefaultPhoto from '../../../src/assets/img/animals-smiley.png'

let Users = (props) => {
   if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
         props.setUsers(response.data.items);
      });
   }
   //old arrow from userReducer can be here
   return <div>
      {
         props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={u.photos.small != null ? u.photos.small : userDefaultPhoto} className={s.userPhoto} alt='userPhoto' />
               </div>
               <div>
                  {u.followed
                     ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                     : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>}
               </div>
            </span>
            <span className={s.userInfo}>
               <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
               </span>
               <span>
                  <div>{"u.location.country"}</div>
                  <div>{"u.location.city"}</div>
               </span>
            </span>
         </div>)
      }
   </div>
}

export default Users;

   //old arrow from userReducer
/*
   if (props.users.length === 0) {
      props.setUsers([
         {
            id: 1,
            photoUrl: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-6.jpg',
            followed: false,
            name: 'Mykola',
            status: "I am a boss",
            location: { city: 'Kyiv', country: 'Ukraine', }
         },
         {
            id: 2,
            photoUrl: 'https://external-preview.redd.it/t5IBAQ3gaehTHCIiqINnJZ-BOpsXVkRQQ1tzjS0IP84.jpg?auto=webp&s=ad45db84dfdc35658eba374db5f5de34aabbd555',
            followed: true,
            name: 'Sasha',
            status: "I am a boss too",
            location: { city: 'London', country: 'England', }
         },
         {
            id: 3,
            photoUrl: 'https://i.pinimg.com/originals/e8/ec/d4/e8ecd48d9f71e8d75c5c7057105afda4.jpg',
            followed: false,
            name: 'Andrew',
            status: "I am a big boss",
            location: { city: 'Warsaw', country: 'Poland', }
         },
      ])
   }
*/