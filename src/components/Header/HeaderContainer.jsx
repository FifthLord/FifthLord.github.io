
import React from "react";
import Header from "./Header";
//import * as axios from "axios";
import { connect } from "react-redux";
//import s from "./Header.module.css";
import { getAuthUserDataThunkCreator } from '../../redux/authReducer';


class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.getAuthUserDataThunkCreator();
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

export default connect(mapStateToProps, { getAuthUserDataThunkCreator })(HeaderContainer);