import React from 'react';
import {UserInformation}  from '../../components/UserInformation/UserInformation';
import {UserPosts} from '../../components/UserInformation/UserPosts'
//CSS
import './User.css';
//GUI


function OpenThisTab(index: any){
    var list_btn = document.getElementsByClassName('user-tabs-list-btn');
    var list_panel = document.getElementsByClassName('user-tabs-panel'); //Tạm

    list_btn[index].classList.add('active');
    list_panel[index].classList.add('active'); //Tạm
    for (let i=0; i < list_btn.length; i++){
        if(index === i)
        {continue;}
        else
        {
            list_btn[i].classList.remove('active');
            list_panel[i].classList.remove('active'); //Tạm
        }
    }
};

//Define thêm function thay đổi cái posts

export const User = () => {
    return (
        <div className="user-page">
            <div className="user-profile">
                <UserInformation />

                <div className="user-tabs">
                    <div className="user-tabs-list">
                        <button id="user-tab-posts"className="user-tabs-list-btn pointer active" onClick={() => OpenThisTab(0)}>Posts</button>
                        <button id="user-tab-saved"className="user-tabs-list-btn pointer" onClick={() => OpenThisTab(1)}>Saved</button>
                        <button id="user-tab-taged"className="user-tabs-list-btn pointer" onClick={() => OpenThisTab(2)}>Taged</button>
                    </div>
                    <div className="user-tabs-panels">
                        <div className="user-tabs-panel active panel-posts">
                            <div className="user-posts">
                                <UserPosts />
                            </div>
                        </div>
                        {/* Tại giao diện của 3 tụi này t tính làm giống nhau
                        => Sử dụng chung component UserPosts này 
                        Mỗi lần click vào nút thay đổi tab thì posts dưới sẽ thay đổi
                        => <UserPosts posts={posts} />
                        Nên 2 cái tab panel dưỚi này + class active sẽ loại bỏ 
                        >>>>>>
                        Khi có dữ liệu post rồi t mới làm đc, trước mắt tạm v đi
                        <<<<<<
                        */}
                        <div className="user-tabs-panel panel-saved">
                            <div className="user-posts">
                                <UserPosts />
                                <UserPosts />
                                <UserPosts />
                                <UserPosts />
                                <UserPosts />
                            </div>
                        </div>
                        <div className="user-tabs-panel panel-taged">
                            <div className="user-posts">
                                <UserPosts />
                            </div>
                        </div>                  
                    </div>
                </div>      
            </div>
        </div>
    );
};
