import React from "react";

class AboutClass extends React.Component {
    constructor(props){
        super({props})
    }
    render(){
        return(
            <div>
                <h1>About Page</h1>
                <h2>{this.props.name}</h2>
                <h2>{this.props.data}</h2>
            </div>
        )
    }
}

export default AboutClass