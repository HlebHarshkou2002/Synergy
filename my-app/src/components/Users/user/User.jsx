import React from "react";
import s from "./User.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
              onClick={() => {
                axios
                  .delete(
                    `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "7e1b8b07-d9aa-4fa2-bffa-8cc81e921356"
                      }
                    }) 
                  .then((response) => {
                    console.log("Response: ", response);
                    if (response.data.resultCode === 0) {
                      subscribe();
                    }
                  });
              }}
              style={{ backgroundColor: props.followed ? "red" : "#222222" }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                axios.post(
                    `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, 
                    {},
                    {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "7e1b8b07-d9aa-4fa2-bffa-8cc81e921356"
                      }
                    }
                  ).then((response) => {
                    console.log("Response: ", response);
                    if (response.data.resultCode === 0) {
                      subscribe();
                    }
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
