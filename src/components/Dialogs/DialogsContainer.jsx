
import {
   sendMessageActionCreator,
   updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer"
import Dialogs from "./Dialogs";
import { connect } from "react-redux"
import { withAuthNavigate } from '../../hoc/withAuthNavigate'


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

//* HOC is under this line
let AuthNavigateComponent = withAuthNavigate(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);

export default DialogsContainer;