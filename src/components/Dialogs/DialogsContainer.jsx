
import {
   sendMessageActionCreator,
   updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import { connect } from "react-redux"
import { withAuthNavigate } from '../../hoc/withAuthNavigate'
import { compose } from "redux";


let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   }
};


let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageText: (text) => {
         dispatch(updateNewMessageTextActionCreator(text))
      },
      sendMessage: () => {
         dispatch(sendMessageActionCreator())
      },
   }
};


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   //* HOC is under this line
   withAuthNavigate
)(Dialogs)