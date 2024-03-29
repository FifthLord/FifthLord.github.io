
import React from "react";
import s from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status,
   }

   activateEditMode() {
      this.setState({
         editMode: true
      });
   }

   deactivateEditMode() {
      this.setState({
         editMode: false
      });
      this.props.updateStatus(this.state.status);
   }

   onStatusChange(e) {
      this.setState({
         status: e.currentTarget.value
      })
   }

   componentDidUpdate(prevProps, prevStatus) {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status
         });
      }
   }

   render() {
      return (
         <div>
            {!this.state.editMode &&
               <div className={s.status}>
                  <span
                     onDoubleClick={this.activateEditMode.bind(this)}
                  >
                     {this.props.status || "Status"}
                  </span>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input
                     onChange={this.onStatusChange.bind(this)}
                     autoFocus={true}
                     onBlur={this.deactivateEditMode.bind(this)}
                     value={this.state.status} />
               </div>
            }
         </div>
      );
   }
}

export default ProfileStatus;