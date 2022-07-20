import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

   let postsElements = props.posts
      .map((p) => {
         return (<Post message={p.message} id={p.id} likesCount={p.likesCount} />);
      })

   // add Ref in DOM through VirtualDOM 
   let newPostElement = React.createRef();

   let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text);
      newPostElement.current.value = '';
   }

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea ref={newPostElement}></textarea>
            </div>
            <div>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         <div className={s.postsItems}>
            {postsElements}
         </div>
      </div>
   );
}

export default MyPosts