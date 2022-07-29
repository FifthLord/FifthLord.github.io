
import React from "react";
import {
   addPostActionCreator,
   updateNewPostTextActionCreator,
} from "../../../redux/profileReducer"
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

   //let state = props.store.getState();

   /*
   let addPost = () => {
      props.store.dispatch(addPostActionCreator())
   };

   let onPostChange = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
   };
   */

   return (
      <StoreContext.Consumer>{
         (store) => {
            let state = props.store.getState();
            let addPost = () => { props.store.dispatch(addPostActionCreator()) };
            let onPostChange = (text) => {
               let action = updateNewPostTextActionCreator(text);
               props.store.dispatch(action);
            };
            <MyPosts
               updateNewPostText={onPostChange}
               addPost={addPost}
               posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText}
            /*
               updateNewPostText={onPostChange}
               addPost={addPost}
               posts={state.profilePage.posts}
               newPostText={state.profilePage.newPostText}
            */
            />
         }}
      </StoreContext.Consumer>
   );
}

export default MyPostsContainer;