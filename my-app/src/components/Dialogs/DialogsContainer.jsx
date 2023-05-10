import React from "react";
import { connect } from "react-redux";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

// Ненужный кусок кода, учился писать контейнерные компоненты
// const DialogsContainer = (props) => {

//   let state = props.store.getState().dialogsPage;

//   let newMessage = React.createRef();

//   let sendMessage = () => {
//     props.store.dispatch(sendMessageCreator());
//   }

//   let newMessageChange = (body) => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   }

//   return (
//     <Dialogs
//     updateNewMessageBody={newMessageChange} 
//     sendMessage={sendMessage}
//     dialogsPage={store.getState().dialogsPage}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body));},
    sendMessage: () => {dispatch(sendMessageCreator());},
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
