import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300" />
      <p>Synergy</p>

      {props.isFetching ? (
        <div className={s.preloader__wrapper}><Preloader /></div>
      ) : (
        <div className={s.register__item}>
          {props.isAuth ? (
            <NavLink
              to={`/profile/` + props.id}
              style={{ textDecoration: "none" }}
            >
              <span className={s.register}>{props.login}</span>
            </NavLink>
          ) : (
            <NavLink to={"/login"} style={{ textDecoration: "none" }}>
              <span className={s.register}>Login</span>
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
