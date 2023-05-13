import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { LoginInput } from "../../common/FormsControls/FormsControls";

const maxLength15 = maxLengthCreator(15);

const LoginForm = (props) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit} action="">
                <div>
                    <Field placeholder={"login"} name={"login"} component={LoginInput} validate={[required, maxLength15]} />
                </div>
                <div>
                    <Field placeholder={"password"} name={"password"} component={LoginInput}  validate={[required, maxLength15]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
                </div>
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