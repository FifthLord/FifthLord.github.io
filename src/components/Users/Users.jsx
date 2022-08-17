

import React from "react";
import s from './Users.module.css'
import userDefaultPhoto from '../../../src/assets/img/animals-smiley.png'
import { NavLink } from "react-router-dom";

import * as axios from "axios";


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
                  <NavLink to={'/profile/' + u.id}>
                     <img src={u.photos.small != null
                        ? u.photos.small
                        : userDefaultPhoto}
                        className={s.userPhoto}
                        alt='userPhoto' />
                  </NavLink>
               </div>
               <div>
                  {u.followed

                     ? <button
                        //* можно сделать на "includes" - disabled={props.followingInProgress.includes(props.id)}
                        disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => {
                           props.toggleFollowingProgress(true, u.id);
                           axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                              {
                                 withCredentials: true,
                                 headers: {
                                    "API-KEY": "1cec7c1e-94f4-4b69-a2ac-bb929116b70c"
                                 },
                              })
                              .then(response => {
                                 if (response.data.resultCode === 0) {
                                    props.unfollow(u.id);
                                 };
                                 props.toggleFollowingProgress(false, u.id);
                              });
                        }}>Unfollow</button>

                     : <button
                        disabled={props.followingInProgress.some(id => id === u.id)}
                        onClick={() => {
                           props.toggleFollowingProgress(true, u.id);
                           axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                              {},
                              {
                                 withCredentials: true,
                                 headers: {
                                    "API-KEY": "1cec7c1e-94f4-4b69-a2ac-bb929116b70c"
                                 },
                              })
                              .then(response => {
                                 if (response.data.resultCode === 0) {
                                    props.follow(u.id);
                                 };
                                 props.toggleFollowingProgress(false, u.id);
                              });
                        }}>Follow</button>}

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
