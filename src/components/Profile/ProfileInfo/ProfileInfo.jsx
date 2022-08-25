import React from "react";
import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus"

//https://pictr.com/images/2020/11/16/7uD4Bf.jpg
const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }

   return (
      <div>

         <div className={s.descriptionBlock}>
            <img className={s.myAvatarImage}
               src={props.profile.photos.large}
               alt="userAvatar" />
            <ProfileStatus
               status={props.status}
               updateStatus={props.updateStatus}
            />
         </div>
      </div>
   );
}

export default ProfileInfo