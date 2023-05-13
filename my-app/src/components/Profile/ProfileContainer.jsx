import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import { useParams } from 'react-router-dom';
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params['*'];

    if(!userId) {
      userId = 2;
    }
    
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);

  }

  render() {    
    return <Profile {...this.props} 
    status={this.props.status}
    profile={this.props.profile} 
    updateUserStatus={this.props.updateUserStatus} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});


// Данная функция написана сама по себе потому что её больше нет в модуле react router dom
export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
