import React from "react";
import { setUserData, authMe} from "../../redux/auth-reducer";
import { connect } from "react-redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMe();
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

export default connect(mapStateToProps, { setUserData, authMe })(HeaderContainer);
