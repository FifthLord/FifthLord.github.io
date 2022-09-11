
import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo((props) => {
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
});


const maxLength30 = maxLengthCreator(30);

const AddPostForm = (props) => {

   return (
      <form
         className={s.textarea}
         onSubmit={props.handleSubmit}
      >
         <div>
            <Field
               component={Textarea}
               placeholder="Add your Post"
               name="newPostText"
               validate={[required, maxLength30]}
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