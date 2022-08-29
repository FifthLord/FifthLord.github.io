
import React from "react";
//import s from './Users.module.css'
import { connect } from "react-redux";
import Users from './Users.jsx';
import Preloader from '../common/Preloader/Preloader';
import {
   followAC,
   unfollowAC,
   setCurrentPageAC,
   getUsersThunkCreator,
} from "../../redux/usersReducer";
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from "redux";


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

export default compose(
   connect(mapStateToProps, {
      follow: followAC,
      unfollow: unfollowAC,
      setCurrentPage: setCurrentPageAC,
      getUsers: getUsersThunkCreator,
   }),
   //* HOC is under this line
   withAuthNavigate
)(UsersContainer);
