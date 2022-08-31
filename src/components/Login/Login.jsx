import React from "react";
import s from "./Login.module.css";
import { Field, reduxForm } from 'redux-form';
import { required, maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { connect } from "react-redux"
import {
   loginTC,
   logoutTC,
} from '../../redux/authReducer'


const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field
               placeholder={"Email"}
               name={"email"}
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

   const onSubmit = (formData) => {
      props.login(formData.email,
         formData.password,
         formData.rememberMe)
   }

   return (
      <div>
         <h1 className={s.login}>
            LOGIN
         </h1>
         <LoginReduxForm onSubmit={onSubmit} />
      </div>
   );
}


export default connect(null, { loginTC, logoutTC })(Login);