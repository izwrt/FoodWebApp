import React from "react";

class AboutClass extends React.Component {
    constructor(props) {
        // console.log("construstor");
        super(props); 
        this.state = {
           userInfo:{

           }
        };
    }
    async componentDidMount(){
        // console.log("component did mount.")
        const data = await fetch("https://api.github.com/users/benadecta");
        
        const json = await data.json();
        console.log(json);
        this.setState({userInfo:json})
    }

    componentWillUnmount(){
        console.log("unmounted....")
        }

    render() {
        const {name,bio,avatar_url} = this.state.userInfo;
        return (
            <div>
                <h1>About Page</h1>
                <h2>{name}</h2>
                <img src={avatar_url}></img>
                <h3>{bio}</h3>
            </div>
        );
    }
}


export default AboutClass;
