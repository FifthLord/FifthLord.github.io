

import React from "react";
//import * as axios from "axios";
//import s from './Users.module.css'
import { connect } from "react-redux";
import Users from './Users.jsx';
import Preloader from '../Preloader/Preloader';
import {
   followAC,
   unfollowAC,
   setUsersAC,
   setCurrentPageAC,
   setTotalUsersCountAC,
   toggleIsFetchingAC,
} from "../../redux/usersReducer"
import userAPI from '../../api/api';

class UsersContainer extends React.Component {

   componentDidMount() {
      this.props.toggleIsFetching(true);

      userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
         this.props.setTotalUsersCount(data.totalCount);
      });
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);

      userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
         this.props.toggleIsFetching(false);
         this.props.setUsers(data.items);
      });
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
      isFetching: state.usersPage.isFetching
   }
};


export default connect(mapStateToProps, {
   follow: followAC,
   unfollow: unfollowAC,
   setUsers: setUsersAC,
   setCurrentPage: setCurrentPageAC,
   setTotalUsersCount: setTotalUsersCountAC,
   toggleIsFetching: toggleIsFetchingAC,
})(UsersContainer);

