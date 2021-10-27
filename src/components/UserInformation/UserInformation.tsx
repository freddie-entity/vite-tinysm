import React from "react";
import '../../pages/User/User.css'
import './UserInformation.css'

export const UserInformation = () =>{
    return(
        <div className="user-infomation">
            <div className="avatar flex-align-justify-center">
                <div className='avatar-img'>
                    <img src='/profile.jpg' alt='' />
                </div>
            </div>
            <div className="information">
                <div className="username">
                    <div>
                        <p id="username">Dua Lipa</p>
                        <span id="link-name">@tech-no</span>
                    </div>
                    <button className="un-followed pointer"><span>Follow</span></button>
                    <button className="direct-message pointer"><i className="ri-send-plane-2-line"></i></button>
                    {/* <button className="followed pointer"><span>Unfollow</span></button>
                    {followed ? 
                    <button className="un-followed pointer" onClick={follow}><span>Follow</span></button> 
                    :
                    <button className="followed pointer" onClick={unfollow}><span>Unfollow</span></button>}} */}
                </div>
                <ul className="count">
                    <li><span id="user-posts">69</span> <span>posts</span></li>
                    <li><a href="#"><span id="user-followers">69</span> <span>followers</span></a></li>
                    <li><a href="#"><span id="user-followings">69</span> <span>followings</span></a></li>
                </ul>
                <div className="bio">
                    <span id="bio">
                    🦋 𝐍𝐠𝐚̆́𝐦 𝐧𝐡𝐢̀𝐧 𝐍𝐡𝐮̛̃𝐧𝐠 𝐜𝐨̂ 𝐧𝐚̀𝐧𝐠 đ𝐞̣𝐩 𝐧𝐡𝐚̂́𝐭🦋<br/>
                    📩 𝐍𝐡𝐚̣̂𝐧 𝐐𝐮𝐚̉𝐧𝐠 𝐜𝐚́𝐨- 𝐏𝐫 - 𝐊𝐞́𝐨 𝐟𝐨𝐥𝐥𝐨𝐰👉🏻𝐃𝐢𝐫𝐞𝐜𝐭<br/>
                    📋 𝐅𝐚𝐧𝐩𝐚𝐠𝐞 𝐆𝐚́𝐢 𝐗𝐢𝐧𝐡 𝐍𝐡𝐚̂́𝐭❤️<br/>
                    𝐌𝐢𝐱 đ𝐨̂̀ 𝐭𝐡𝐨̛̀𝐢 𝐭𝐫𝐚𝐧𝐠<br/>
                    </span>
                </div>
                <div className="web-address">
                    <a href="www.facebook.com/sunny.bichtram" id="web-address" className="pointer">www.facebook.com/sunny.bichtram</a>
                </div>
            </div>
        </div>
    );
}