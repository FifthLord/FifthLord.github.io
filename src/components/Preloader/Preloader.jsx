import React from "react";
import s from "./Preloader.module.css";
import preloaderLogo from '../../assets/img/Spin-1s-200px.svg'

const Preloader = () => {
   return (
      <div className={s.preloader}>
         <img src={preloaderLogo} alt="preloader logo" />
      </div>
   )
}

export default Preloader;