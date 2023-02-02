import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../redux/dialogs-reducer";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = state.messagesData.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let newMessage = React.createRef();

  let sendMessage = () => {
    let message = newMessage.current.value;
    props.sendMessage();
  }

  let newMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <textarea ref={newMessage} 
                name="message" 
                id="" cols="30" 
                rows="10"
                onChange={newMessageChange}
                >    
      </textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Dialogs;
