import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
   /*
      let posts = [
         { id: 1, message: 'Hi, how are you?', likesCount: 5, },
         { id: 2, message: "It's my first post", likesCount: 10, },
      ]
   */

   let postsElements = props.posts
      .map((p) => {
         return (<Post message={p.message} id={p.id} likesCount={p.likesCount} />)
      })

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post</button>
            </div>
         </div>
         <div className={s.postsItems}>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts