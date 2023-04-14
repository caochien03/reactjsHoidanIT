

import React from "react";

class MyComponent extends React.Component {
    //jsx

    state = {
        name: 'Eric',
        address: "hoi dan it",
        age : 26
    }
    render() {
        return(
            <div>
                my name is {this.state.name}
            </div>
        );
    }
}

export default MyComponent;