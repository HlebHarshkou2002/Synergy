import React from "react";
import ProfileInfo from "./Profile_Info/Profile_Info";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {


    return (
        <div>
            <ProfileInfo 
                profile={props.profile} 
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />

            <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;