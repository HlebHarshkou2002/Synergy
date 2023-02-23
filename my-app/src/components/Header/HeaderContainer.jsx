import React from "react";
import { setUserData } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import Header from "./Header";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Response: ", response);

        if (response.data.resultCode === 0) {

          let email = response.data.data.email;
          let id = response.data.data.id;
          let login = response.data.data.login;
          this.props.setUserData(id, email, login);
        }
      });
  }


  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id
  };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
