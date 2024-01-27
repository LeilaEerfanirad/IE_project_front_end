import React, { useState } from 'react';
import './Login.scss'
const Login = () => {
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
        console.log(c.user._id);
        
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

                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}

export default Login;
