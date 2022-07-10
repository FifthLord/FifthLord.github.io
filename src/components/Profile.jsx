import React from "react";
import s from "./Profile.module.css";

const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://northernhorizon.no/wp-content/uploads/2016/04/02.03.19_NorthernHorizon-35.jpg" alt="main header background" />
         </div>
         <div>
            <img src="https://pictr.com/images/2020/11/16/7uD4Bf.jpg" />
            description
         </div>
         <div>
            My posts
            <div >
               New post
            </div>
            <div className={s.posts}>
               <div className={s.item}>
                  post 1
               </div>
               <div className={s.item}>
                  post 2
               </div>
            </div>
         </div>
      </div>
   );
}

export default Profile