

import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./Displayinfor";

class MyComponent extends React.Component {
    //jsx
    state = {
        ListUsers : [
            {id:0, name:"nguyen", age: "16"},
            {id:1, name:"cao", age: "19"},
            {id:2, name:"chien", age: "25"},
        ]
    }

    handleAddNewUser = (newObj) => {
        console.log(newObj)
        this.setState({
            ListUsers:[newObj,...this.state.ListUsers]
        })
    }

    render() {
        return(
            <div>
                <AddUserInfor 
                    handleAddNewUser = {this.handleAddNewUser}
                
                />
                <br/>
                <DisplayInfor ListUsers = {this.state.ListUsers}/>
            </div>
        );
    }
}

// const MyComponent = (props) => {
//     const [ListUsers, setListUsers] = useState()
//     return(
//         <div>
//             <AddUserInfor 
//                 handleAddNewUser = {this.handleAddNewUser}
            
//             />
//             <br/>
//             <DisplayInfor ListUsers = {this.state.ListUsers}/>
//         </div>
//     );
// }

export default MyComponent;