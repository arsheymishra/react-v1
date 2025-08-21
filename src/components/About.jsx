import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component{

    constructor(props){
        super(props);

        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent componentDidMount")
    }

    render(){
        console.log("Parent Render")
        return(
            <div>
                <h1>About Us</h1>
                <p>This is a simple React application that showcases a list of restaurants.</p>
                <p>Feel free to explore and search for your favorite food!</p>
                <UserClass name={"first"} location = {"Bhubaneswar"}/>   
                <UserClass name={"second"} location = {"Bhubaneswar"}/>           
            </div>
        )
    }
}

// const About = ()=>{
//     return (
//         <div>
//             <h1>About Us</h1>
//             <p>This is a simple React application that showcases a list of restaurants.</p>
//             <p>Feel free to explore and search for your favorite food!</p>
//             <UserClass name={"first"} location = {"Bhubaneswar"}/>   
//             <UserClass name={"first"} location = {"Bhubaneswar"}/>           
//         </div>
//     )
// };

export default About;