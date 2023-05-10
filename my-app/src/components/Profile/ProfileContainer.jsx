import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useParams } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params['*'];

    if(!userId) {
      userId = 2;
    }
    
    this.props.getUserProfile(userId);

  }

  render() {    
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});


// Данная функция написана сама по себе потому что её больше нет в модуле react router dom
export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withRouter
)(ProfileContainer);
