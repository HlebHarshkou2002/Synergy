import React from "react";
import s from "./Profile_Info.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div className={s.content}>

        <div className={s.profileImages}>
          <img
            className={s.profileImageMain}
            src="https://klike.net/uploads/posts/2022-05/1651820178_1.jpg"
            alt="Main image"
          />
        </div>

        <div className={s.profileDescription}>
          <h2>Strike while the iron is hot.</h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
