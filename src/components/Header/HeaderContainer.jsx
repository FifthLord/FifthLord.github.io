
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
//import s from "./Header.module.css";
import { getAuthUserDataThunkCreator, logout } from '../../redux/authReducer';


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

export default connect(mapStateToProps, { getAuthUserDataThunkCreator, logout })(HeaderContainer);