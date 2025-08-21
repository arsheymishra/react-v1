import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0,
        }
        console.log(this.props.name +"Component")
    }

    componentDidMount(){
        console.log(this.props.name+"componentDidMount")
    }

    render(){
        console.log(this.props.name+"render")
        
        const {count} = this.state;

        return(
        <div className="user-card">
            <button className="btn-class" onClick={()=>{
                this.setState({
                    count : this.state.count+1,
                })
            }}>count:{count}</button>
            <h2>Name: {this.props.name}</h2>
            <h3>Location: {this.props.location}</h3>
            <h4>Contact: @arshey_mishra</h4>
        </div>
        );
    }
}

export default UserClass;