
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';


const MyPosts = (props) => {

   let postsElements = props.posts.map((p) => {
      return (<Post message={p.message} id={p.id} likesCount={p.likesCount} />);
   })

   let onAddPost = (values) => {
      props.addPost(values.newPostText);
   };

   return (
      <div className={s.postsBlock}>
         <h3>My posts</h3>
         <AddPostReduxForm onSubmit={onAddPost} />
         <div className={s.postsItems}>
            {postsElements}
         </div>
      </div>
   );
}

const AddPostForm = (props) => {

   return (
      <form
         className={s.textarea}
         onSubmit={props.handleSubmit}
      >
         <div>
            <Field
               component={"textarea"}
               placeholder={"Add your Post"}
               name={"newPostText"}
            />
         </div>
         <div className={s.button}>
            <button>Add post</button>
         </div>
      </form>
   )
}

const AddPostReduxForm = reduxForm({
   form: 'profileAddPostForm'
})(AddPostForm)


export default MyPosts