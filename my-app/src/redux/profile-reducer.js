const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
      { id: 1, message: "You are so pretty. Pls, tell me, where are you from?", likesCount: 23 },
      { id: 2, message: "Omg! Its New-York, I had to return there, because its so precious.", likesCount: 12 },
    ],
    newPostText: "Hello, Alex!",
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;