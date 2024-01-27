import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss'
const Login = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit2 = async () => {
        navigate('/signup');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('here');
        let c = "aa";
        const a = await fetch(
            `http://localhost:3000/login?username=${formData.username}&password=${formData.password}`
            , {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            c = data
            // console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        console.log(c.user.followings);
        localStorage.setItem('user', JSON.stringify(c.user));
        localStorage.setItem('isLogedin', true);
        navigate('/profile');
        
    };

    return (
        <div className="loginContainer">
            <h2>Login</h2>
            <form >
                <label htmlFor="username" ></label>
                <input
                    placeholder='UserName'
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password"></label>
                <input
                    placeholder='Password'
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit" onClick={handleSubmit}>Log in</button>
                <button type="submit" onClick={handleSubmit2}>Sign up</button>
            </form>
        </div>
    );
}

export default Login;
