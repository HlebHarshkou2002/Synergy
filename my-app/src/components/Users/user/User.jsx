import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../../api/api";

const User = (props) => {
  let subscribe = () => {
    if (props.followed) {
      props.unFollow(props.id);
    } else {
      props.follow(props.id);
    }
  };

  return (
    <div className={s.item}>
      <div className={s.profile}>
        <NavLink to={"/profile/" + props.id}>
          <img src={props.photoUrl} alt="avatar" />
        </NavLink>
        <div>
          {props.followed ? (
            <button
              disabled={props.usersInFollowingProgress.some(id => id === props.id)}
              onClick={() => {
                props.toggleFollowingProgress(true, props.id);
                usersAPI.unfollowUser(props.id).then((data) => {
                  if (data.resultCode === 0) {
                    subscribe();
                  }
                  props.toggleFollowingProgress(false, props.id);
                });
              }}
              style={{ backgroundColor: props.followed ? "red" : "#222222" }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.usersInFollowingProgress.some(id => id === props.id)}
              onClick={() => {
                props.toggleFollowingProgress(true, props.id);

                usersAPI.followUser(props.id).then((data) => {
                  if (data.resultCode === 0) {
                    subscribe();
                  }
                  props.toggleFollowingProgress(false, props.id);
                });
              }}
              style={{ backgroundColor: props.followed ? "red" : "#222222" }}
            >
              Follow
            </button>
          )}
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
