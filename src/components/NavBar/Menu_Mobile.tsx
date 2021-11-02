import React from "react";
import './Menu_Mobile.css'

export const Menu_Mobile = () => {
    return (
        <div className="menu-mobile">
            <button className="menu-item" >
                <i className="ri-home-line"></i>
            </button>
            <button className="menu-item" >
                <i className="ri-notification-line"></i>
            </button>
            <button className="menu-item" >
                <i className="ri-send-plane-line"></i>
            </button>
            <button className="menu-item" >
                <i className="ri-add-box-line"></i>
            </button>
            <button className="menu-item" >
                <div className="user-avatar btn">
                    <button className="avatar-container">
                    <img src="/profile.jpg" alt="Your fucking avatar"/>
                    </button>
                </div>
            </button>
        </div>  
    );
}