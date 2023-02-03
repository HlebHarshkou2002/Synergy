import React from "react";
import { connect } from "react-redux";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// Ненужный код, учился создавать контейнерные компоненты
// const MyPostsContainer = (props) => {
//   let state = props.store.getState();
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   };

//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       addPost={addPost}
//       postsData={state.profilePage.postsData}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
        dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
