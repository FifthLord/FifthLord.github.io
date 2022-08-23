import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import s from "./Profile.module.css";
import { getUserProfileThunkCreator } from '../../redux/profileReducer';
import { useParams } from 'react-router-dom';
//import { withAuthNavigate } from '../../hoc/withAuthNavigate'
import { compose } from "redux";

//!используем Хук - UseParams, он позволяет достучаться до url Но так как нельзя хуки и классы мешать, 
//!мы берем и заворачиваем наш хук в функцию, далее из функции, которая как раз совпадает с нерабочим withRouter

export function withRouter(Children) {
   return (props) => {
      const match = { params: useParams() };
      return <Children {...props} match={match} />
   }
}

class ProfileContainer extends React.Component {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 2;
      }
      this.props.getUserProfileThunkCreator(userId);
   }

   render() {
      return (
         <div className={s.profile}>
            <Profile {...this.props} />
         </div>
      );
   }
}


let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
});


export default compose(
   connect(mapStateToProps, { getUserProfileThunkCreator }),
   withRouter,
   //* HOC is under this line
   //withAuthNavigate
)(ProfileContainer);