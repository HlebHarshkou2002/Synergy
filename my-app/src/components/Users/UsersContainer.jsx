import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleFollowingProgress,
  getUsers,
  onPageChanged
} from "../../redux/users-reducer";
import Users from "./Users";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, 
          getIsFetching, getPageSize, 
          getTotalUsersCount, getUsersDataSelector, getUsersInFollowingProgress } from "../../redux/selectors/users-selectors";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }


  render() {
    return (
      <Users
        usersData={this.props.usersData}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        isFetching={this.props.isFetching}

        followingInProgress={this.props.followingInProgress}
        usersInFollowingProgress={this.props.usersInFollowingProgress}
        
        onPageChanged={this.props.onPageChanged}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: getUsersDataSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    usersInFollowingProgress: getUsersInFollowingProgress(state),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreator(userId));
//     },
//     unFollow: (userId) => {
//       dispatch(unFollowActionCreactor(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users));
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageActionCreator(pageNumber));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountActionCreator(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleFetchingActionCreator(isFetching));
//     },
//   };
// };


export default compose(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers,
    onPageChanged
  }),
  withAuthRedirect
)(UsersAPIContainer);
