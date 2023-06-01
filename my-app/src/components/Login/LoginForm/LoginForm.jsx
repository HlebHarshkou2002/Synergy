import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { LoginInput } from "../../common/FormsControls/FormsControls";
import style from "../../common/FormsControls/FormsControl.module.css"

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit} action="">
                <div>
                    <Field placeholder={"email"} name={"email"} component={LoginInput} validate={[required, maxLength30]} />
                </div>
                <div>
                    <Field placeholder={"password"} name={"password"} component={LoginInput}  validate={[required, maxLength30]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>

                {props.error && 
                <div className={style.formSummaryError}>
                    {props.error}
                </div>
                }
                

                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm) 

export default LoginReduxForm;