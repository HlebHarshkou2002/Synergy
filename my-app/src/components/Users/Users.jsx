import React from "react";
import User from "./user/User";

const Users = (props) => {
  let usersElements = props.usersData.map((u) => (
    <User
      name={u.name}
      followed={u.followed}
      id={u.id}
      surname={u.surname}
      photoUrl={u.photoUrl}
      status={u.status}
      country={u.location.country}
      city={u.location.city}

      follow={props.follow}// из контейнерной компоненты метод передаётся презентационной в пропсах
      unFollow={props.unFollow}
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
