import React from "react";
import s from './MyPosts.module.css';
import Post from './post/Post.jsx';

const MyPosts = (props) => {

    let postsElements = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }

    return (
        <div className="posts">
            <textarea onChange={onPostChange}
                    value={props.newPostText}
                    ref={newPostElement} 
                    name="" id="" cols="50" rows="5"></textarea>
            <button onClick={onAddPost }>Add post</button>
            {postsElements}
        </div>
    );
}

export default MyPosts;