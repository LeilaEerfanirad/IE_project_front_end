import './profile.scss'
import React, { useEffect, useState } from 'react';

import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
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
            
            <p><strong>Username:</strong> {props.item.username}</p>
            <p><strong>Email:</strong> {props.item.email}</p>
            <p><strong>First Name:</strong> {props.item.firstname}</p>
            <nav >
                <NavLink  to='/followers'>
                    <p><strong>Followers:</strong> {props.item.followers.length}</p>
                </NavLink>
                <NavLink to='/followings'>
                    <p><strong>Following:</strong> {props.item.followings.length}</p>
                </NavLink>
            </nav>
            
        </div>
        <div className="userProfileContainer__profileFooter">

        </div>
            
            
    </div>
        
        
    );
};

export default Profile;
