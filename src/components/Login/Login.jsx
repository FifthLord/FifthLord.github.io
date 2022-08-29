import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";


const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field
               placeholder={"Login"}
               name={"login"}
               component={Input}
               validate={[required, maxLength30]} />
         </div>
         <div>
            <Field
               placeholder={"Password"}
               name={"password"}
               component={Input}
               validate={[required, maxLength30]} />
         </div>
         <div className={s.checkbox}>
            <Field
               component={Input}
               name={"rememberMe"}
               type={"checkbox"} /> remember me
         </div>
         <div>
            <button>Login</button>
         </div>
      </form>
   );
}

const LoginReduxForm = reduxForm({
   form: 'login'
})(LoginForm)


const Login = (props) => {
   return (
      <div>
         <h1 className={s.login}>
            LOGIN
         </h1>
         <LoginReduxForm />
      </div>
   );
}


export default Login;

