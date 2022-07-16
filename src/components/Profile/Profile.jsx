import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

   let posts = [
      { id: 1, message: 'Hi, how are you?', likesCount: 5, },
      { id: 2, message: "It's my first post", likesCount: 10, },
   ]

   return (
      <div className={s.profile}>
         <ProfileInfo />
         <MyPosts posts={posts} />
      </div>
   );
}

export default Profile