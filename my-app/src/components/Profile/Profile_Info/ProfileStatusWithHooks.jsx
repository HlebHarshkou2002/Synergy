import React, { useState } from "react";
import {
    EditOutlined
  } from '@ant-design/icons';


const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }


    return (
        <div>
        {!editMode && 
        <div>
            <span>{props.status || "--------"}</span>
            <EditOutlined onClick={activateEditMode}/>
        </div>
        }

        {editMode &&
        <div>
            <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} type="text" value={status}/>
        </div>
        }
    </div>
    )
}

export default ProfileStatusWithHooks;