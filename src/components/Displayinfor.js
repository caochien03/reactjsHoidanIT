import React from "react";
import './DisplayInfor.scss'


class DisplayInfor extends React.Component {

    state = {
        isShowListUsers : true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUsers : !this.state.isShowListUsers
        })
    } 

    render() {
        const { ListUsers } = this.props;
        return(
            <div>
                <div onClick={() => this.handleShowHide()}>
                    <span>{this.state.isShowListUsers === true ? "hide the lists" : "show the lists"}</span>
                </div>
                {this.state.isShowListUsers &&
                    <div>
                        {ListUsers.map((user) => {
                            return (
                                <div key = {user.id} className={+user.age >=18 ? "red" : "green"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr/>
                                </div>
                            )
                        })}
                    </div>

                }
                
            </div>
           
        )
    }
}

export default DisplayInfor;