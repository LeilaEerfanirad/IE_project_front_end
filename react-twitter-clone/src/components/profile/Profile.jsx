import './profile.scss'
import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import 'css-doodle';
const Profile = () => {
    let user = JSON.parse(localStorage.getItem('user')) || [];
    let logStatus = localStorage.getItem('isLogedin');
    console.log(logStatus);
    
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate('/edit');
    }
    if (logStatus == "false"){
        
        window.alert('User not Log in');
        navigate('/')
        return (
        <div>
            
        </div>
        )
    }
    return (
    <div className="userProfileContainer">
        <div className="userProfileContainer__profileHeader">
            <div className="userProfileContainer__profileHeader--firstRow">
                <h2>{user.firstname} {user.lastname}</h2>
                <button onClick={handleEdit} className='userProfileContainer__button'>Edit Profile</button>
            </div>
            
            <div className="userContainer__profileHeader--firstRow">
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                
                <nav >
                    <NavLink className="userContainer__profileHeader--nav" to='/followers'>
                    <p ><strong>Followers:</strong> {user.followers.length}</p>
                    </NavLink>
                    <NavLink className="userContainer__profileHeader--nav" to='/followings'>
                        <p ><strong>Following:</strong> {user.followings.length}</p>
                    </NavLink>
                </nav>
            </div>
            
        </div>
        <div className="userProfileContainer__profileFooter">

        </div>
            
            
    </div>    
    );
    
};

export default Profile;
