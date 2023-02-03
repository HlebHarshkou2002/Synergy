const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:{
            //Делаем копию стейта чтобы connect мог понять, что стейт изменился и мог перерендерить компоненту
            return{
              ...state,
              newMessageBody: action.body,
            };
        }
        case SEND_MESSAGE: {
            //Делаем копию стейта чтобы connect мог понять, что стейт изменился и мог перерендерить компоненту
            let body = state.newMessageBody;
            return{
              ...state,
              newMessageBody: '',
              messagesData: [...state.messagesData, { id: 5, message: body }],
            };         
        }
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE,})
  
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

export default dialogsReducer;