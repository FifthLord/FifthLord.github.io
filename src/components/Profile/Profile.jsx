import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { Navigate } from "react-router-dom";


const Profile = (props) => {

   if (!props.isAuth) return <Navigate to={"/login"} />;

   return (
      <div className={s.profile}>
         <ProfileInfo profile={props.profile} />
         <MyPostsContainer />
      </div>
   );
}

export default Profile