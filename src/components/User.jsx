import { useState } from "react";

const User = ({name,location})=>{
    const [cnt,setCnt] = useState(0);
    return(
        <div className="user-card">
            <button className="cnt" onClick={()=>{
                setCnt(cnt+1);
            }}>Count : {cnt}</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @arshey_mishra</h4>
        </div>
    )
}

export default User;