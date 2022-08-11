import React from "react";
import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";

//https://pictr.com/images/2020/11/16/7uD4Bf.jpg
const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }

   return (
      <div>
         <div>
            <img className={s.titleImage} src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://northernhorizon.no/wp-content/uploads/2016/04/02.03.19_NorthernHorizon-35.jpg"
               alt="headerBackground" />
         </div>
         <div className={s.descriptionBlock}>
            <img className={s.myAvatarImage}
               src={props.profile.photos.large}
               alt="userAvatar" />
            Description
         </div>
      </div>
   );
}

export default ProfileInfo