import React from "react";
import s from "./Profile_Info.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div className={s.profileImages}>
        <div className={s.imagesWrapper}>
          <img
            className={s.profileImageMain}
            src="https://vjoy.cc/wp-content/uploads/2021/02/2f7147400505b7341a3d2f1b913f55b9747b06fe16cc3a14c05b0814a3c42b80.jpg"
            alt="Main image"
          />
        </div>

        <div className={s.profileDescription}>
          <div className={s.profileName}>
            <span>Alex Doe</span>
          </div>
          <p>Strike while the iron is hot.</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
