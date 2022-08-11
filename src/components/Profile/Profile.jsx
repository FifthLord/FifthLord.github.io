import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
   return (
      <div className={s.profile}>
         <ProfileInfo profile={props.profile} />
         <MyPostsContainer
         //store={props.store}
         //posts={props.profilePage.posts}
         //newPostText={props.profilePage.newPostText}
         //dispatch={props.dispatch}
         />
      </div>
   );
}

export default Profile