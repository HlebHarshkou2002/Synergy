import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://bugaga.ru/uploads/posts/2010-01/1264351210_x_24b4185f.jpg" alt="" />
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>
    );
}

export default Post;