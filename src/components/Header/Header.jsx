import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
   return (
      <header className={s.header}>
         <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/green-company-logo-design-template-e6cda0adebc58ba974fa4d2d02a14d1e_screen.jpg?ts=1567170398" alt="header_company_logo" />
         <div className={s.loginBlock}>
            {props.isAuth ? props.login
               : <NavLink to={'/login'}>Login</NavLink>}
         </div>
      </header>
   );
}

export default Header;