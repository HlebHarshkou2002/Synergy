import React from "react";
import { connect } from "react-redux";
import { followActionCreator, unFollowActionCreactor, setUsersActionCreator } from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unFollow: (userId) => {
            dispatch(unFollowActionCreactor(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
} 

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;