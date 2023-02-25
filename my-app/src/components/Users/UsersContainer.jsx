import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from "../../redux/users-reducer";
import Users from "./Users";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    if (this.props.usersData.length === 0) {
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then((data) => {
          this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
          this.props.setTotalUsersCount(data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);

    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
      });
  };

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
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
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

const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersAPIContainer);

export default UsersContainer;
