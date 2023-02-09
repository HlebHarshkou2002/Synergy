import React from "react";
import s from "./User.module.css";

const User = (props) => {
    let subscribe = () => {
        if(props.followed) {
            props.unFollow(props.id);
        } else {
            props.follow(props.id);
        }
    }

  return (
    <div className={s.item}>
      <div className={s.profile}>
        <img src={props.photoUrl} alt="avatar" />
        <div>
          <button onClick={subscribe} style={{backgroundColor: props.followed ? 'red' : '#222222'}}>{props.followed ? "Unfollow" : "Follow"}</button>
        </div>
      </div>

      <div className={s.content}>
        <div className={s.fullName}>
          <span>{props.name}</span>
          {/* <span> {props.surname}</span> */}
        </div>

        <div className={s.status}>{props.status}</div>

        {/* <div className={s.location}>
          {props.country}, {props.city}
        </div> */}
      </div>
    </div>
  );
};

export default User;
