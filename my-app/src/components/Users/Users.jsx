import React from "react";
import User from "./user/User";
import styles from "./Users.module.css";
import Preloader from "../common/Preloader/Preloader";


const Users = (props) => {

  let usersElements = props.usersData.map((u) => (
    <User
      name={u.name}
      followed={u.followed}
      id={u.id}
      // surname={u.surname}
      photoUrl={
        u.photos.small === null
          ? "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          : u.photos.small
      }
      status={u.status}
      // country={u.location.country}
      // city={u.location.city}

      follow={props.follow} // из контейнерной компоненты метод передаётся презентационной в пропсах
      unFollow={props.unFollow}
      active={u.active}
    />
  ));

  let pagesCount = Math.ceil(
    props.totalUsersCount / props.pageSize
  );

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let slicedPages;
  let curPage = props.currentPage;
  if (curPage - 5 < 0) {
    slicedPages = pages.slice(0, 5);
  } else {
    slicedPages = pages.slice(curPage - 3, curPage + 2);
  }

  return (
    <div>
      <h1>USERS</h1>

      <div className={styles.pagesBar}>
        {slicedPages.map((p) => {
          return (
            <div
              className={
                props.currentPage === p
                  ? styles.selectedPage
                  : styles.pageItem
              }
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </div>
          );
        })}
      </div>

      {props.isFetching ? <Preloader /> : usersElements}
      
    </div>
  );
};

export default Users;
