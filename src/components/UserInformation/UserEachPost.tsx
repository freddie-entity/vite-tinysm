import React from "react";
import './UserEachPost.css'


export const UserEachPost = () =>{
    return(
        <div className="user-post pointer">
            <img src="./profile3.jpg" alt="Post of user xxx"></img>
            <div className="count">
                <span><i className="fas fa-heart"></i> 69 </span>
                <span><i className="fas fa-comment"></i> 69 </span>
            </div>
        </div>
    );
}
