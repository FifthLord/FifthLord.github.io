

import React from "react";
import s from './Users.module.css'
import userDefaultPhoto from '../../../src/assets/img/animals-smiley.png'



let Users = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
      if (i === 20) break;
   }

   return <div className={s.usersWrapper}>
      <div className={s.pageList}>
         {pages.map(p => {
            return <span className={s.pageItems}>
               <span
                  className={props.currentPage === p && s.selectedPage}
                  onClick={() => { props.onPageChanged(p) }} >{p}</span>
            </span>
         })}
      </div >
      {
         props.users.map(u => <div key={u.id} className={s.userProfile}>
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
   </div >

}

export default Users;
