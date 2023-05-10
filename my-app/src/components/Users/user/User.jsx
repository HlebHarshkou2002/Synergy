import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../../api/api";

const User = (props) => {

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
                props.unFollow(props.id);
              }
            }
              style={{ backgroundColor: props.followed ? "red" : "#222222" }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={props.usersInFollowingProgress.some(id => id === props.id)}
              onClick={() => {
                props.follow(props.id);
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
