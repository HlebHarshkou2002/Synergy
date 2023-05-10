import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./Profile_Info.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  console.log(props.profile);
  return (
    <div className={s.profileInfo}>
      <div
        className={s.profileImages}
        style={{
          backgroundImage: `url('https://img.pac.ru/resorts/213084/265649/big/F4022E267F00010148FB84960BB1A70A.jpg')`,
        }}
      >
        <div className={s.imagesWrapper}>
          {/* <img
            className={s.profileImageMain}
            src={
              props.profile.photos.large
                ? props.profile.photos.large
                : "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
            }
            alt="Main image"
          /> */}
        </div>

        <div className={s.profileDescription}>
          <div className={s.profileName}>
            <span>{props.profile.fullName}</span>
          </div>
          <p>{props.profile.aboutMe}</p>

          <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
