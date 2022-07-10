import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src="https://aws1.discourse-cdn.com/infiniteflight/original/4X/2/6/3/26318a15ce8a133cc327d0baebbd9dc8ca8c76c1.jpeg" alt="Posts avatar" />
         {props.message}
         <div>
            <span>Like {props.likeValye}</span>
         </div>
      </div>
   );
}

export default Post