
import React from "react";
import { connect } from "react-redux";
import Users from './Users.jsx';
import Preloader from '../common/Preloader/Preloader';
import {
   followAC,
   unfollowAC,
   setCurrentPageAC,
   getUsersThunkCreator,
} from "../../redux/usersReducer";
//import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import { compose } from "redux";
import {
   getUsers,
   getPageSize,
   getTotalUsersCount,
   getCurrentPage,
   getIsFetching,
   getFollowingInProgress,
} from "../../redux/usersSelectors";


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
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
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
   //withAuthNavigate
)(UsersContainer);
