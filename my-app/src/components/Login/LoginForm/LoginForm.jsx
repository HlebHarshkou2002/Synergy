import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit} action="">
                <div>
                    <Field placeholder={"login"} name={"login"} component={"input"} />
                </div>
                <div>
                    <Field placeholder={"password"} name={"password"} component={"input"}  />
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