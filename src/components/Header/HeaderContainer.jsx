
import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
//import s from "./Header.module.css";
import { setAuthUserDataAC } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
         withCredentials: true,
      })
         .then(response => {
            debugger
            if (response.data.resultCode === 0) {
               let { email, id, login, } = response.data.data;
               this.props.setAuthUserDataAC(email, id, login,);
            }
         });
   }
   render() {
      return (
         <Header {...this.props} />
      );
   }
}

let mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserDataAC })(HeaderContainer);