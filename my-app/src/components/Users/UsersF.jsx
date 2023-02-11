import React from "react";
import User from "./user/User";
import axios from "axios";

const Users = (props) => {

    if (props.usersData.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          console.log(response);
          props.setUsers(response.data.items);
        });
  }
    // let users = [
    //   {
    //     id: 1,
    //     photoUrl:
    //       "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    //     followed: false,
    //     name: "Alex",
    //     surname: "Korol",
    //     status: "I am a korol here",
    //     location: { country: "USA", city: "New-York" },
    //   },
    //   {
    //     id: 2,
    //     photoUrl:
    //       "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    //     followed: true,
    //     name: "Gleb",
    //     surname: "Gorshkov",
    //     status: "Hi body",
    //     location: { country: "Belarus", city: "Minsk" },
    //   },
    //   {
    //     id: 3,
    //     photoUrl:
    //       "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    //     followed: false,
    //     name: "Nika",
    //     surname: "Volchik",
    //     status: "I am a korol here too",
    //     location: { country: "Belarus", city: "Pinsk" },
    //   },
    // ];
    // props.setUsers(users);

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

  return (
    <div>
      <h1>USERS</h1>
      {usersElements}
    </div>
  );
};

export default Users;
