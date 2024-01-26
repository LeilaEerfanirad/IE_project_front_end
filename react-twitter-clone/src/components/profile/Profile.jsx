import './profile.scss'
import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import 'css-doodle';
const Profile = (props) => {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate('/edit');
    }
    return (
    <div className="userProfileContainer">
        <div className="userProfileContainer__profileHeader">
            <div className="userProfileContainer__profileHeader--firstRow">
                <h2>{props.item.firstname} {props.item.lastname}</h2>
                <button onClick={handleEdit} className='userProfileContainer__button'>Edit Profile</button>
            </div>
            
            <div className="userContainer__profileHeader--firstRow">
                <p><strong>Username:</strong> {props.item.username}</p>
                <p><strong>Email:</strong> {props.item.email}</p>
                
                <nav >
                    <NavLink className="userContainer__profileHeader--nav" to='/followers'>
                    <p ><strong>Followers:</strong> {props.item.followers.length}</p>
                    </NavLink>
                    <NavLink className="userContainer__profileHeader--nav" to='/followings'>
                        <p ><strong>Following:</strong> {props.item.followings.length}</p>
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
