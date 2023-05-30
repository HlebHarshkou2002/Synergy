import React from "react";
import { setAuthUserData, getAuthUserData, logout} from "../../redux/auth-reducer";
import { connect } from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserData();
  }


  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id,
    isFetching: state.auth.isFetching
  };
};

export default connect(mapStateToProps, { setAuthUserData, getAuthUserData, logout })(HeaderContainer);
