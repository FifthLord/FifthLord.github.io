

import React from "react";
//import * as axios from "axios";
//import s from './Users.module.css'
import { connect } from "react-redux";
import Users from './Users.jsx';
import Preloader from '../Preloader/Preloader';
import {
   followAC,
   unfollowAC,
   //setUsersAC,
   setCurrentPageAC,
   //setTotalUsersCountAC,
   //toggleIsFetchingAC,
   //toggleFollowingProgressAC,
   getUsersThunkCreator,
} from "../../redux/usersReducer"


class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
   }

   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize);
   }

   render() {
      return <>
         {this.props.isFetching ? <Preloader /> : null}
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            //toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
         />
      </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress,
   }
};


export default connect(mapStateToProps, {
   follow: followAC,
   unfollow: unfollowAC,
   //setUsers: setUsersAC,
   setCurrentPage: setCurrentPageAC,
   //setTotalUsersCount: setTotalUsersCountAC,
   //toggleIsFetching: toggleIsFetchingAC,
   //toggleFollowingProgress: toggleFollowingProgressAC,
   getUsers: getUsersThunkCreator,
})(UsersContainer);
