import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    postsData: [
      { id: 1, message: "You are so pretty. Pls, tell me, where are you from?", likesCount: 23 },
      { id: 2, message: "Omg! Its New-York, I had to return there, because its so precious.", likesCount: 12 },
    ],
    newPostText: "Hello, Alex!",
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 54,
              };
            //Делаем копию стейта чтобы connect мог понять, что стейт изменился и мог перерендерить компоненту
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: "",
            };

        }
        case UPDATE_NEW_POST_TEXT:{
            //Делаем копию стейта чтобы connect мог понять, что стейт изменился и мог перерендерить компоненту
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getUserProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
          });
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then((response) => {
            dispatch(setUserStatus(response.data));
          });
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then((response) => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
          });
    }
}

export default profileReducer;