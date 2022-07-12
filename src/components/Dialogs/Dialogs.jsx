import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = () => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
               Dimych
            </div>
            <div className={s.dialog}>
               Andrey
            </div>
            <div className={s.dialog}>
               Sveta
            </div>
            <div className={s.dialog}>
               Sacha
            </div>
            <div className={s.dialog}>
               Victor
            </div>
            <div className={s.dialog}>
               Valerar
            </div>
         </div>
         <div className={s.massages}>
            <div className={s.massage}>
               Hi
            </div>
            <div className={s.massage}>
               How are u?
            </div>
            <div className={s.massage}>
               yo
            </div>
         </div>
      </div>
   )
}

export default Dialogs;