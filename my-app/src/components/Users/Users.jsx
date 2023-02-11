import React from "react";
import User from "./user/User";
import axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.usersData.length === 0) {
            axios
              .get("https://social-network.samuraijs.com/api/1.0/users")
              .then((response) => {
                console.log(response);
                this.props.setUsers(response.data.items);
              });
        }
    }


  render() {
    let usersElements = this.props.usersData.map((u) => (
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

        follow={this.props.follow} // из контейнерной компоненты метод передаётся презентационной в пропсах
        unFollow={this.props.unFollow}
        active={u.active}
      />
    ));
    return (
      <div>
        <h1>USERS</h1>
        {usersElements}
      </div>
    );
  }
}

export default Users;
