const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
      { id: 1, message: "Hello, a good reason!", likesCount: 23 },
      { id: 2, message: "Hi, my name is!", likesCount: 1 },
    ],
    newPostText: "it-kamasutra.com",
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 1000,
              };
            debugger;
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