import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img className={s.titleImage} src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://northernhorizon.no/wp-content/uploads/2016/04/02.03.19_NorthernHorizon-35.jpg" alt="main header background" />
         </div>
         <div>
            <img className={s.myAvatarImage} src="https://pictr.com/images/2020/11/16/7uD4Bf.jpg" />
            description
         </div>
         <MyPosts />
      </div>
   );
}

export default Profile