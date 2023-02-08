import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img
          src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          alt="Post Profile Image"
        />
      </div>

      <div className={s.content}>
        <div className={s.message}>
            {props.message}
        </div>
        <div className={s.likes}>
          <span className={s.likesText}>like</span> {props.likesCount}
        </div>
      </div>
    </div>
  );
};

export default Post;
