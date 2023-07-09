import React from "react";

class AddUserInfor extends React.Component {

    state = {
        name: '',
        address: "hoi dan it",
        age : ''
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

        this.props.handleAddNewUser({
            id: Math.floor(Math.random()*100 + 1) + '-ramdom',
            name: this.state.name,
            age: this.state.age

        })
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

export default AddUserInfor;