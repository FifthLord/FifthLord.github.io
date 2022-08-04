

import * as axios from "axios";
import React from "react";
import s from './Users.module.css'
import userDefaultPhoto from '../../../src/assets/img/animals-smiley.png'



class Users extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
         });
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
         });
   }

   render() {

      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

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
                     className={this.props.currentPage === p && s.selectedPage}
                     onClick={() => { this.onPageChanged(p) }} >{p}</span>
               </span>
            })}
         </div >
         {
            this.props.users.map(u => <div key={u.id} className={s.userProfile}>
               <span>
                  <div>
                     <img src={u.photos.small != null ? u.photos.small : userDefaultPhoto} className={s.userPhoto} alt='userPhoto' />
                  </div>
                  <div>
                     {u.followed
                        ? <button onClick={() => { this.props.unfollow(u.id) }}>Follow</button>
                        : <button onClick={() => { this.props.follow(u.id) }}>Unfollow</button>}
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
}

export default Users;
