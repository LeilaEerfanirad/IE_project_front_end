import './profile.scss'
import React, { useEffect, useState } from 'react';
import Post from '../post/Post.jsx';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import 'css-doodle';
const Profile = () => {
    let user = JSON.parse(localStorage.getItem('user')) || [];
    let logStatus = localStorage.getItem('isLogedin');
    // console.log(logStatus);
    let posts = user.tweets;
    // console.log(posts[0])
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate('/edit');
    }
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('user')) || [];
        let logStatus = localStorage.getItem('isLogedin');
        console.log(logStatus);
        if (logStatus == "false") {
          window.alert('User not Log in');
          navigate('/');
        }
      }, []);
    return (
    <div className="userProfileContainer">
        <div className="userProfileContainer__profileHeader">
            <div className="userProfileContainer__profileHeader--firstRow">
                <h2>{user.firstname} {user.lastname}</h2>
                <button onClick={handleEdit} className='userProfileContainer__button'>Edit Profile</button>
            </div>
            
            <div className="userProfileContainer__profileHeader--firstRow">
                <p><strong>Username:</strong> {user.username}</p>
            </div>
            <div className="userProfileContainer__profileHeader--firstRow">
                <p><strong>Email:</strong> {user.email}</p>
            </div>
                
            <div className="userProfileContainer__profileHeader--firstRow">
                <nav >
                    <NavLink className="userProfileContainer__profileHeader--nav" to='/followers'>
                        Followers: {user.followers.length}
                    </NavLink>
                    <NavLink className="userProfileContainer__profileHeader--nav" to='/followings'>
                        Following: {user.followings.length}
                    </NavLink>
                </nav>
            </div>
           
            
        </div>
        <div className="userProfileContainer__profileFooter">
            {posts.map(row => <Post item={row}/>)}
        </div>
            
            
    </div>    
    );
    
};

export default Profile;
