import React from "react";
import s from "./FormsControl.module.css";

export const LoginInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.form__control + " " + (hasError ? s.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError ? <span>{meta.error}</span> : ""}
        </div>
    )
}