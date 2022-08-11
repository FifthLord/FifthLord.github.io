import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import s from "./Profile.module.css";
import { setUserProfileAC } from '../../redux/profileReducer'



class ProfileContainer extends React.Component {

   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
         .then(response => {
            this.props.setUserProfileAC(response.data);
         });
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
   profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfileAC })(ProfileContainer);