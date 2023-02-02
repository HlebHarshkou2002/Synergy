import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "Hello, a good reason!", likesCount: 23 },
        { id: 2, message: "Hi, my name is!", likesCount: 1 },
      ],
      newPostText: "it-kamasutra.com",
    },
    dialogsPage: {
      messagesData: [
        { id: 1, message: "Hi!!" },
        { id: 2, message: "Hello" },
        { id: 3, message: "How are you?" },
        { id: 4, message: "Heeey!" },
      ],
      dialogsData: [
        { id: 1, name: "Glebasta" },
        { id: 2, name: "Vika" },
        { id: 3, name: "Dima" },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // наблюдатель addEventListener Observer
  },

  _callSubscriber() {},
  updateNewPostText(newText) {},
  addPost(postMessage) {},
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.profilePage, action);

    this._callSubscriber(this._state);
  }
}


export default store;
