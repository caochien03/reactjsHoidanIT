import React from "react";

class UserInfor extends React.Component {

    state = {
        name: 'Eric',
        address: "hoi dan it",
        age : 26
    };
    
    handleOnchange = (event) => {
        this.setState({
            name : event.target.value
        }) 
    }
    handleOnchangeAge = (event) => {
        this.setState({
            age : event.target.value
        }) 
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)

    }
    render() {
        return(
            <div> 
                my name is {this.state.name} my age is {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name:</label>
                    <input 
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnchange(event)}
                    />
                    <button>submit</button>
                    <label>Your age:</label>
                    <input 
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnchangeAge(event)}
                    />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;